import REACT from 'react';
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from '@mui/material';

interface SidePanelProps {
    questions: Question[];
    currentQuestionIndex: number;
    onSelectQuestion: (index: number) => void;
}

//side panel 

const SidePanel: React.FC<SidePanelProps> = ({ questions, currentQuestionIndex, onSelectQuestion }) => {
    return (
        <Box>
            {questions.map((question, index) => (
                <Button key={question.id} onClick={() => onSelectQuestion(index)} 
                        className={currentQuestionIndex === index ? 'active' : ''}>
                    Question {index + 1}
                </Button>
            ))}
        </Box>
    );
};


export default SidePanel;