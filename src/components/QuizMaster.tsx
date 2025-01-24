import React, { useState } from 'react';
import { Upload, FileText, RefreshCw } from 'lucide-react';
import Tesseract from 'tesseract.js';
import PDFViewer from './PDFViewer';
import QuizSection from './QuizSection';
import ScoreBoard from './ScoreBoard';
import { HfInference } from '@huggingface/inference';

const hf = new HfInference("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");

const QuizMaster = () => {
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<'pdf' | 'image' | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [showResults, setShowResults] = useState(false);
  const [textContent, setTextContent] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const extractTextFromPDF = async (file: File) => {
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.onload = async (e) => {
        const text = e.target?.result as string;
        resolve(text);
      };
      reader.readAsText(file);
    });
  };

  const extractTextFromImage = async (file: File) => {
    const reader = new FileReader();
    return new Promise((resolve, reject) => {
      reader.onload = async (e) => {
        try {
          const result = await Tesseract.recognize(e.target?.result as string, 'eng');
          resolve(result.data.text);
        } catch (error) {
          reject('Error extracting text from image');
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const generateQuestions = async (text: string) => {
    try {
      const response = await hf.textGeneration({
        model: 'mistralai/Mistral-7B-Instruct-v0.3',
        inputs: `Generate 5 multiple choice questions with answers from this text: ${text}`,
        parameters: {
          max_length: 1000,
          temperature: 0.7,
          top_p: 0.95,
        },
      });

      const rawQuestions = response.generated_text
        .split('\n\n')
        .filter((q) => q.trim().length > 0)
        .map((q) => {
          const lines = q.split('\n');
          const question = lines[0].replace(/^\d+\.\s*/, '');
          const options = lines.slice(1, -1).map((o) => o.replace(/^[A-D]\)\s*/, ''));
          const correctAnswer = options[0];

          return {
            question,
            options: shuffleArray([...options]),
            correctAnswer,
            explanation: 'Based on the content from the file',
          };
        });

      return rawQuestions.slice(0, 5);
    } catch (error) {
      console.error('Error generating questions:', error);
      return [];
    }
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (!uploadedFile) return;

    const type = uploadedFile.type.includes('pdf') ? 'pdf' : 'image';
    setFileType(type);
    setFile(uploadedFile);
    setLoading(true);

    if (type === 'image') {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(uploadedFile);
    }

    try {
      const text =
        type === 'pdf'
          ? await extractTextFromPDF(uploadedFile)
          : await extractTextFromImage(uploadedFile);

      setTextContent(text as string);
      const generatedQuestions = await generateQuestions(text as string);
      setQuestions(generatedQuestions);
    } catch (error) {
      console.error('Error processing file:', error);
    } finally {
      setLoading(false);
    }
  };

  const resetQuiz = () => {
    setFile(null);
    setQuestions([]);
    setScore({ correct: 0, total: 0 });
    setShowResults(false);
    setTextContent('');
    setFileType(null);
    setImagePreview(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">File Quiz Master</h1>
          <p className="text-xl text-gray-300">
            Upload a PDF or Image and test your knowledge with AI-generated questions
          </p>
        </header>

        {!file ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8">
            <FileText className="w-16 h-16 text-blue-400 mb-6" />
            <label className="relative group cursor-pointer">
              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileUpload}
                className="hidden"
              />
              <div className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center space-x-2 transition-all duration-300 group-hover:scale-105">
                <Upload className="w-5 h-5" />
                <span>Upload File</span>
              </div>
            </label>
            <p className="mt-4 text-gray-400">Supported formats: PDF, PNG, JPG, JPEG</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {fileType === 'pdf' && (
              <div className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6">
                <PDFViewer file={file} />
              </div>
            )}

            {fileType === 'image' && imagePreview && (
              <div className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6 flex items-center justify-center">
                <img src={imagePreview} alt="Uploaded Preview" className="max-w-full max-h-[400px] rounded-lg" />
              </div>
            )}

            <div className="space-y-8">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <RefreshCw className="w-12 h-12 text-blue-400 animate-spin" />
                  <p className="mt-4 text-gray-300">Analyzing file content...</p>
                </div>
              ) : showResults ? (
                <ScoreBoard
                  score={score}
                  total={questions.length}
                  onReset={resetQuiz}
                />
              ) : (
                <QuizSection
                  questions={questions}
                  onComplete={(results) => {
                    setScore(results);
                    setShowResults(true);
                  }}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizMaster;
