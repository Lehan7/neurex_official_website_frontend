import React, { useState } from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';

interface QuizSectionProps {
  questions: any[];
  onComplete: (score: { correct: number; total: number }) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [error, setError] = useState<string | null>(null); // To manage error state

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(prev => ({ ...prev, correct: prev.correct + 1 }));
    }
    setScore(prev => ({ ...prev, total: prev.total + 1 }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setError(null); // Reset error on next question
    } else {
      onComplete(score);
    }
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch('/api/generate-questions');
      
      if (!response.ok) {
        if (response.status === 503) {
          // Handle 503 Service Unavailable error gracefully
          throw new Error('The service is currently unavailable. Please try again later.');
        }
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      // Process the questions from the API response
    } catch (error) {
      console.error('Error generating questions:', error);
      setError(error.message);  // Set the error message state
    }
  };

  // Only show content when questions are available
  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-300">No questions available</p>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-6">
      {/* Error handling display */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/20 text-red-500 rounded-lg">
          <h4 className="font-semibold">Error:</h4>
          <p>{error}</p>
        </div>
      )}

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <span className="text-sm text-gray-400">
            Score: {score.correct}/{score.total}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-6">{question.question}</h3>
        
        <div className="space-y-3">
          {question.options.map((option: string, index: number) => (
            <button
              key={index}
              onClick={() => !selectedAnswer && handleAnswerSelect(option)}
              disabled={!!selectedAnswer}
              className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                selectedAnswer
                  ? option === question.correctAnswer
                    ? 'bg-green-500/20 border-green-500/50'
                    : option === selectedAnswer
                    ? 'bg-red-500/20 border-red-500/50'
                    : 'bg-white/5 border-white/10'
                  : 'bg-white/5 hover:bg-white/10 border-white/10'
              } border backdrop-blur-sm`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedAnswer && (
                  option === question.correctAnswer ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : option === selectedAnswer ? (
                    <XCircle className="w-5 h-5 text-red-500" />
                  ) : null
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {showExplanation && (
        <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
          <h4 className="font-semibold mb-2">Explanation:</h4>
          <p className="text-gray-300">{question.explanation}</p>
        </div>
      )}

      {selectedAnswer && (
        <button
          onClick={handleNext}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300"
        >
          <span>{currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default QuizSection;
