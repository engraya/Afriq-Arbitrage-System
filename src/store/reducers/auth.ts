import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  emailForVerification: null, // Add this property
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutUser: (state) => {
      state.currentUser = null;
    },
    setEmailForVerification: (state, action) => { // New action
      state.emailForVerification = action.payload;
    },
    clearEmailForVerification: (state) => { // Clear email after use
      state.emailForVerification = null;
    },
  },
});

export const { loginUser, logoutUser, setEmailForVerification, clearEmailForVerification } = authSlice.actions;

export default authSlice.reducer;







