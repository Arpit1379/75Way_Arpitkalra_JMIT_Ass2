import React, { useState, useEffect } from 'react';
import { Box } from "@mui/system";

interface Question {
  id: number;
  text: string;
  options: string[];
}

const Quiz: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentIndex => currentIndex + 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Box></Box>
  );
};

export default Quiz;
