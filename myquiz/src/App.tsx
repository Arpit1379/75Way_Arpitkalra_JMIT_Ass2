import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./pages/setting";
import Questions from "./pages/questions";
import FinalScreen from "./pages/FinalScreen";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={
              <>
                <Typography variant="h2" fontWeight="bold">
                  Quiz App
                </Typography>
                <Settings />
              </>
            } >
            </Route>
            <Route path="/questions" element={<Questions />}>
            </Route>
            <Route path="/score" element={<FinalScreen />}>
            </Route>
          </Routes>
          </ErrorBoundary>
        </Box>
      </Container>
    </Router>
  );
}

export default App;