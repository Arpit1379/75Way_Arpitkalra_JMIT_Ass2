import React from 'react';
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import SelectFeild from '../componets/SelectFeild';
import TextFeild from '../componets/TextFeild';
import useAxios from "../hooks/useAxioms";

interface TriviaCategory {
  id: number;
  name: string;
}

 interface TriviaApiResponse {
  trivia_categories: TriviaCategory[];
}

const Settings = () => {
  const { response, error, loading } = useAxios({ url: "/api_category.php" });  //gather the data
  const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography variant="h6" mt={20} color="red">
        Some Went Wrong!
      </Typography>
    );
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choise" },
    { id: "boolean", name: "True/False" },
  ];

  const handleSubmit = (e:any) => {
    e.preventDefault();
    navigate("/questions");
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectFeild options={response!.trivia_categories} label="Category" /> //handle th categories 
      <SelectFeild options={difficultyOptions} label="Difficulty" />
      <SelectFeild options={typeOptions} label="Type" />
      <TextFeild />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Started
        </Button>
      </Box>
    </form>
  );
};

export default Settings;