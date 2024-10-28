import {
  Avatar,
  Box,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  useColorScheme,
  Zoom,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { ThemeMode } from "../constants/theme";
export default function AvatarHeader() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [themeAnchorEl, setThemeAnchorEl] = useState<null | HTMLElement>(null);
  const { mode, setMode } = useColorScheme();

  const handleThemeOpen = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setThemeAnchorEl(event.currentTarget);
  };

  const handleThemeClose = () => {
    setThemeAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const isThemeOpen = Boolean(themeAnchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChangeTheme = (mode: ThemeMode) => {
    setMode(mode);
  };
  return (
    <Box
      sx={{
        height: "100%",
        padding: "8px",
      }}
    >
      <Tooltip TransitionComponent={Zoom} title="Account settings">
        <IconButton size="small" onClick={handleClick}>
          <Avatar sx={{ width: "24px", height: "24px", cursor: "pointer" }}>
            <AccountCircleIcon />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleThemeOpen}>
          <ListItemIcon>
            <SettingsBrightnessIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Chủ đề</ListItemText>
        </MenuItem>

        <Menu
          anchorEl={themeAnchorEl}
          open={isThemeOpen}
          onClose={handleThemeClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem
            selected={mode === ThemeMode.LIGHT}
            onClick={() => {
              handleChangeTheme(ThemeMode.LIGHT);
            }}
          >
            <ListItemIcon>
              <LightModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sáng</ListItemText>
          </MenuItem>
          <MenuItem
            selected={mode === ThemeMode.DARK}
            onClick={() => {
              handleChangeTheme(ThemeMode.DARK);
            }}
          >
            <ListItemIcon>
              <DarkModeIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Tối</ListItemText>
          </MenuItem>
          <MenuItem
            selected={mode === ThemeMode.SYSTEM}
            onClick={() => {
              handleChangeTheme(ThemeMode.SYSTEM);
            }}
          >
            <ListItemIcon>
              <SettingsBrightnessIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>System</ListItemText>
          </MenuItem>
        </Menu>
      </Menu>
    </Box>
  );
}
