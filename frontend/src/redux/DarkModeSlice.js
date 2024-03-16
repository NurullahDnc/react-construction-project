import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isDarkMode: JSON.parse(localStorage.getItem("darkMode")) ?? false
}

const DarkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state, action) => {

        localStorage.setItem("darkMode", JSON.stringify(!state.isDarkMode));
        state.isDarkMode = !state.isDarkMode;
    }
    
  }
});

export const { toggleDarkMode } = DarkModeSlice.actions;
export default DarkModeSlice.reducer;


