import { PaletteMode } from "@mui/material";
import { ThemeMode } from "../constants/theme";

export const isLightMode = (mode: PaletteMode) => mode === ThemeMode.LIGHT;
