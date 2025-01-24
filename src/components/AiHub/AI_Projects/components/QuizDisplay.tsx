import React from 'react';
import { QuizQuestion } from '../App';

interface QuizDisplayProps {
  questions: QuizQuestion[];
}

const QuizDisplay: React.FC<QuizDisplayProps> = ({ questions }) => {
  return (
    <div>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{q.question}</h3>
          <ul>
            {q.answers.map((ans, idx) => (
              <li key={idx}>
                <input
                  type="radio"
                  name={`question-${index}`}
                  id={`q${index}-a${idx}`}
                />
                <label htmlFor={`q${index}-a${idx}`} className="ml-2">
                  {ans}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default QuizDisplay;
