import {
    CHANGE_CATEGORY,
    CHANGE_DIFFICULTY,
    CHANGE_AMOUNT,
    CHANGE_TYPE,
    CHANGE_SCORE,
  } from "./actiontypes";
  
  export const handleCategoryChange = (payload:any) => ({
    type: CHANGE_CATEGORY,
    payload,
  });
  
  export const handleDifficultyChange = (payload:any) => ({
    type: CHANGE_DIFFICULTY,
    payload,
  });
  
  export const handleTypeChange = (payload:any) => ({
    type: CHANGE_TYPE,
    payload,
  });
  
  export const handleAmountChange = (payload:any) => ({
    type: CHANGE_AMOUNT,
    payload,
  });
  
  export const handleScoreChange = (payload:any) => ({
    type: CHANGE_SCORE,
    payload,
  });