import { Avatar, Box, Button, IconButton } from "@mui/material";
import EditableButton from "./EditableButton";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import RocketIcon from "@mui/icons-material/Rocket";
import BoltIcon from "@mui/icons-material/Bolt";
import FilterListIcon from "@mui/icons-material/FilterList";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function BoardBar() {
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Box
        sx={{
          height: "auto",
          padding: "12px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#005c91",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <EditableButton originalContent="test" />
          </Box>
          <Box>
            <IconButton
              size="small"
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
            >
              <StarOutlineIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
              size="small"
            >
              <PeopleAltIcon />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
              startIcon={<EqualizerIcon />}
            >
              Bảng
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            height: "100%",
          }}
        >
          <Box>
            <IconButton
              size="small"
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
            >
              <RocketIcon />
            </IconButton>
          </Box>
          <Box>
            <IconButton
              size="small"
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
            >
              <BoltIcon />
            </IconButton>
          </Box>
          <Box>
            <Button
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
              startIcon={<FilterListIcon />}
            >
              Bộ lọc
            </Button>
          </Box>
          <Box>
            <Avatar
              sx={{
                width: "24px",
                height: "24px",
                cursor: "pointer",
                margin: "0 8px",
              }}
            >
              <AccountCircleIcon />
            </Avatar>
          </Box>
          <Box>
            <Button
              sx={{
                color: "#172B4D",
                backgroundColor: "#DCDFE4",

                "&:hover": { backgroundColor: "#fff" },
              }}
              startIcon={<PersonAddIcon />}
            >
              Chia sẻ
            </Button>
          </Box>
          <Box>
            <IconButton
              size="small"
              sx={{
                color: "text.primary",
                "&:hover": { backgroundColor: "#ffffff33" },
              }}
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
