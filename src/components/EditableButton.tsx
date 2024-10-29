import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
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
          }}
        >
          {content}
        </Button>
      )}
    </Box>
  );
}
