import {
  TextField,
  InputAdornment,
  FormControl,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
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
              <IconButton size="small" type="submit" edge="start">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        size="small"
        sx={{
          width: "100%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "4px",
          },
        }}
      />
    </FormControl>
  );
}

export default InputSearch;
