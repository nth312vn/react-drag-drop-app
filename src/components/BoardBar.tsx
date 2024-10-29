import { Box, IconButton } from "@mui/material";
import EditableButton from "./EditableButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
export default function BoardBar() {
  return (
    <Box sx={{ height: "56px", width: "100%" }}>
      <Box
        sx={{
          height: "100%",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <EditableButton originalContent="test" />
          </Box>
          <Box>
            <IconButton size="small">
              <StarOutlineIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
