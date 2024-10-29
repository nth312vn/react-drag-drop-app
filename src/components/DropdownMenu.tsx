import { useState } from "react";
import { Box, Menu, MenuItem, Button, ListItemText } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export interface DropdownMenuProps {
  title: string;
  options: MenuOptions[];
}
export interface MenuOptions {
  text: string;
  callBack?: () => void;
}
export default function DropdownMenu(props: DropdownMenuProps) {
  const { title, options } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
          color: "text.primary",
        }}
      >
        {title}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {options.map((option, index) => (
          <MenuItem
            onClick={() => {
              handleClose();
              option.callBack?.();
            }}
            key={index}
            dense
          >
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
