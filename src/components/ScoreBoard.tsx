import React from 'react';
import { Award, RefreshCw } from 'lucide-react';

interface ScoreBoardProps {
  score: { correct: number; total: number };
  total: number;
  onReset: () => void;
}

const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, total, onReset }) => {
  const percentage = Math.round((score.correct / total) * 100);

  return (
    <div className="bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8 text-center">
      <Award className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
      <h2 className="text-3xl font-bold mb-4">Quiz Complete!</h2>
      
      <div className="text-6xl font-bold text-blue-400 mb-4">
        {percentage}%
      </div>
      
      <p className="text-xl text-gray-300 mb-8">
        You got {score.correct} out of {total} questions correct
      </p>
      
      <button
        onClick={onReset}
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 mx-auto"
      >
        <RefreshCw className="w-5 h-5" />
        <span>Try Another PDF</span>
      </button>
    </div>
  );
};

export default ScoreBoard;