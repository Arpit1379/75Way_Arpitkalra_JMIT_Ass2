import React, { useState, ChangeEvent } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/actions";

interface SelectFieldProps {
  label: string;
  options: Array<{ id: string, name: string }>;
}

const SelectFeild: React.FC<SelectFieldProps> = ({ label, options }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");

  const handleChange = (e:any) => {
    const selectedValue = e.target.value ;// Type assertion
    setValue(selectedValue);

    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(selectedValue));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(selectedValue));
        break;
      case "Type":
        dispatch(handleTypeChange(selectedValue));
        break;
      default:
        return;
    }
  };

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default SelectFeild;
