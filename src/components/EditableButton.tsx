import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { isLightMode } from "../utils/theme.utils";
export interface EditableButtonProps {
  originalContent: string;
}
export default function EditableButton(props: EditableButtonProps) {
  const { originalContent } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(originalContent);
  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  return (
    <Box>
      {isEditing ? (
        <TextField
          value={content}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
          variant="outlined"
          inputProps={{
            style: {
              height: "32px",
              padding: "0 14px",
            },
            maxlength: "20",
          }}
          sx={{
            color: "text.primary",
            boxSizing: "border-box",
            "& .MuiOutlinedInput-root.Mui-focused": {
              backgroundColor: (theme) =>
                isLightMode(theme.palette.mode) ? "#FFFFFF" : "#22272b",
              color: (theme) =>
                isLightMode(theme.palette.mode) ? "#22272b" : "#FFFFFF",
            },
          }}
        />
      ) : (
        <Button
          onClick={handleClick}
          sx={{
            backgroundColor: "transparent",
            padding: "0 10px",
            lineHeight: "2rem",
            borderRadius: "4px",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "18px",
            whiteSpace: "nowrap",
            color: "text.primary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            "&:hover": {
              backgroundColor: "#ffffff33",
            },
          }}
        >
          {content}
        </Button>
      )}
    </Box>
  );
}
