import { FormControl, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React,{ChangeEvent} from "react";
import { useDispatch } from "react-redux";
import { handleAmountChange } from "../redux/actions";

const TextFeild = () => {
  const dispatch = useDispatch();
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(handleAmountChange(e.target.value));
  };

  return (
    <Box mt={3}  width="100%">
      <FormControl fullWidth size="small">
        <TextField
          onChange={handleChange}
          variant="outlined"
          label="Amount of Questions"
          type="number"
          size="small"
        />
      </FormControl>
    </Box>
  );
};

export default TextFeild;