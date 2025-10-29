import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import createAppTheme from "./theme";

const ThemeProvider = ({ children }) => {
  const mode = useSelector((state) => state.theme.mode);
  const accent = useSelector((state) => state.theme.accent);

  const theme = useMemo(() => createAppTheme(mode, accent), [mode, accent]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
