import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline } from "@mui/material";
import theme from "./theme.ts";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <CssVarsProvider defaultMode="system" theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </Provider>
);
