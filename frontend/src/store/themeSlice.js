import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: typeof window !== "undefined" ? localStorage.getItem("themeMode") || "dark" : "dark",
  accent: "#6750A4", // valid hex color for Material You primary
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.mode);
      }
    },
    setAccent: (state, action) => {
      state.accent = action.payload;
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("themeMode", state.mode);
      }
    },
  },
});

export const { toggleMode, setAccent, setMode } = themeSlice.actions;
export default themeSlice.reducer;
