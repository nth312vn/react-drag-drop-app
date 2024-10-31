import {
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { isLightMode } from "../utils/theme.utils";
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
        autoComplete="off"
        size="small"
        sx={{
          width: "100%",
          color: "text.primary",
          padding: 0,
          backgroundColor: "#fff3",
          borderRadius: "4px",

          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
          },
          "& .MuiOutlinedInput-root.Mui-focused": {
            height: "100%",
            borderRadius: "4px",
            boxSizing: "border-box",
            backgroundColor: (theme) =>
              isLightMode(theme.palette.mode) ? "#FFFFFF" : "#22272b",
            color: (theme) =>
              isLightMode(theme.palette.mode) ? "#22272b" : "#FFFFFF",
          },
        }}
      />
    </FormControl>
  );
}

export default InputSearch;
