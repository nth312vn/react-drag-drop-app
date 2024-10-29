import { common } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: "#1D2125" },
        text: {
          primary: "#9FADBC",
        },
      },
    },
    light: {
      palette: {
        primary: { main: "#08479e" },
        text: {
          primary: common.white,
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
