import React, { useState } from 'react';
import axios from 'axios';
import { PDFDocument } from 'pdf-lib';
import Quiz from '../AI_Projects/components/Quiz';

const App1: React.FC = () => {
  const [quizData, setQuizData] = useState<{ question: string; answers: string[] }[]>([]);
  const [isQuizReady, setIsQuizReady] = useState<boolean>(false);

  const extractTextFromPDF = async (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      if (e.target?.result) {
        const pdfDoc = await PDFDocument.load(e.target.result as ArrayBuffer);
        const pages = pdfDoc.getPages();
        let extractedText = '';
        for (const page of pages) {
          const { items } = await page.getTextContent();
          extractedText += items.map((item: any) => item.str).join(' ');
        }
        generateQuizQuestions(extractedText);
      }
    };
    reader.readAsArrayBuffer(file);
  };

  const generateQuizQuestions = async (text: string) => {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/your-huggingface-model',
        { inputs: text },
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );
      setQuizData(response.data);
      setIsQuizReady(true);
    } catch (error) {
      console.error('Error generating questions:', error);
    }
  };

  return (
    <div className="p-4">
      {!isQuizReady ? (
        <div>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => e.target.files && extractTextFromPDF(e.target.files[0])}
            className="mb-4 border border-gray-300 rounded p-2"
          />
        </div>
      ) : (
        <Quiz quizData={quizData} />
      )}
    </div>
  );
};

export default App1;
