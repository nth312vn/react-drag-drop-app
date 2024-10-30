import {
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { ThemeMode } from "../constants/theme";
export interface InputSearchProps {
  onSubmit?: (text: string) => void;
}
function InputSearch(props: InputSearchProps) {
  const { onSubmit } = props;
  const [text, setText] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(text);
  };
  return (
    <FormControl
      component="form"
      size="small"
      required
      onSubmit={handleSubmit}
      fullWidth
      sx={{
        color: "text.primary",
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Tìm kiếm"
        value={text}
        onChange={(e) => setText(e.target.value)}
        InputProps={{
          style: {
            height: 32,
          },
          startAdornment: (
            <InputAdornment position="start">
              <IconButton
                size="small"
                type="submit"
                edge="start"
                sx={{ padding: 0 }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        sx={{
          width: "100%",
          color: "text.primary",
          padding: 0,
          backgroundColor: "#fff3",

          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            height: "100%",
            borderRadius: "4px",
            boxSizing: "border-box",
            backgroundColor: (theme) =>
              theme.palette.mode === ThemeMode.LIGHT ? "#FFFFFF" : "#22272b",
            color: (theme) =>
              theme.palette.mode === ThemeMode.LIGHT ? "#22272b" : "#FFFFFF",
          },
        }}
      />
    </FormControl>
  );
}

export default InputSearch;
