import React from 'react';


export interface Question {
    id: number;
    text: string;
    markedForReview: boolean;
}

interface QuestionItemProps {
  question: Question;
  onToggleReview: (questionId: number) => void;
}

const QuestionItem: React.FC<QuestionItemProps> = ({ question, onToggleReview }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <span>{question.text}</span>
      <button onClick={() => onToggleReview(question.id)} style={{ marginLeft: '10px' }}>
        {question.markedForReview ? 'Unmark Review' : 'Mark for Review'}
      </button>
    </div>
  );
};

export default QuestionItem;




 