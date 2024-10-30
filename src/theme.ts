import { common } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        text: {
          primary: "#9FADBC",
          secondary: "#B6C2CF",
        },
      },
    },
    light: {
      palette: {
        text: {
          primary: common.white,
          secondary: "#172B4D",
        },
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
export default theme;
