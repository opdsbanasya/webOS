import { createTheme } from "@mui/material/styles";

// Create a theme that accepts a valid hex color for accent
export function createAppTheme(mode = "light", accent = "#6750A4") {
  // Ensure accent is a valid hex color string
  const validAccent = /^#[0-9A-F]{6}$/i.test(accent) ? accent : "#6750A4";
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: validAccent,
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#ffffff",
        secondary: mode === "light" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)",
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            textTransform: "none",
            borderRadius: 20,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
          },
        },
      },
    },
  });
}

export default createAppTheme;
