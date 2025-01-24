import React from 'react';

interface QuizProps {
  quizData: { question: string; answers: string[] }[];
}

const Quiz: React.FC<QuizProps> = ({ quizData }) => {
  const handleAnswerSelection = (questionIndex: number, answer: string) => {
    // You can add logic to handle user answers here, such as storing selected answers
    console.log(`Question ${questionIndex}: Selected answer is ${answer}`);
  };

  return (
    <div>
      {quizData.map((item, index) => (
        <div key={index} className="mb-4 border border-gray-300 rounded p-4">
          <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
          <ul>
            {item.answers.map((answer, idx) => (
              <li key={idx} className="mt-2">
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    className="mr-2"
                    onChange={() => handleAnswerSelection(index, answer)}
                  />
                  {answer}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
