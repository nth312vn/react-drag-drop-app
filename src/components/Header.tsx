import { Badge, Box, IconButton, Tooltip, Zoom } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DropdownMenu from "./DropdownMenu";
import InputSearch from "./InputSearch";
import AvatarHeader from "./AvatarHeader";
import { isLightMode } from "../utils/theme.utils";

export default function Header() {
  return (
    <Box sx={{ height: "48px", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
          padding: "8px",
          backgroundColor: (theme) =>
            isLightMode(theme.palette.mode) ? "#08479e" : "#1D2125",
          color: "text.primary",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box>
            <IconButton
              sx={{
                borderRadius: "2px",
                color: "text.primary",
                "&:hover": { backgroundColor: "##ffffff33" },
                "&:active": {
                  backgroundColor: "#E9F2FF",
                },
              }}
              size="small"
            >
              <AppsIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "75px",
              height: "32px",
              padding: "0 8px",
              display: "block",
              borderRadius: "2px",
              cursor: "pointer",
              filter: "unset",
              "&:hover": {
                backgroundColor: "#091E4224",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                backgroundSize: "contain",
                backgroundImage:
                  "	url(https://trello.com/assets/d947df93bc055849898e.gif)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                "&:hover": {
                  backgroundImage:
                    "	url(https://trello.com/assets/87e1af770a49ce8e84e3.gif)",
                },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <DropdownMenu
              title="Các không gian làm việc"
              options={[{ text: "Trello không gian làm việc" }]}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <DropdownMenu
              title="Gần đây"
              options={[{ text: "Bảng trello của tôi" }]}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <DropdownMenu
              title="Đã đánh dấu sao"
              options={[{ text: "Bảng trello của tôi" }]}
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <DropdownMenu title="Mẫu " options={[{ text: "Mẫu 1" }]} />
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <DropdownMenu title="Tạo mới " options={[{ text: "Tạo bảng" }]} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: "200px",
              display: { xs: "none", sm: "block" },
            }}
          >
            <InputSearch />
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Tooltip TransitionComponent={Zoom} title="Notification">
              <IconButton
                size="small"
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "#ffffff33" },
                }}
              >
                <Badge color="primary" variant="dot" invisible={false}>
                  <NotificationsNoneIcon />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
            <Tooltip TransitionComponent={Zoom} title="Help">
              <IconButton
                sx={{
                  color: "text.primary",
                  "&:hover": { backgroundColor: "#ffffff33" },
                }}
                size="small"
              >
                <HelpOutlineIcon sx={{}} />
              </IconButton>
            </Tooltip>
          </Box>

          <AvatarHeader />
        </Box>
      </Box>
    </Box>
  );
}
