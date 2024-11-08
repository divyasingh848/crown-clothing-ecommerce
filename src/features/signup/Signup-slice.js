import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define the asynchronous action
export const signUpUser = createAsyncThunk(
  'signup/signUpUser', 
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3000/user', { 
        method: 'POST',
        headers: {
          "Content-Type": "application/json",  // Fixed typo here
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) throw new Error("Signup failed!");
      return await response.json();  // Return the response data if needed
    } catch (error) {
      return rejectWithValue(error.message);  // Return error message
    }
  }
);

// Create the slice
const signupSlice = createSlice({
  name: "signUp",
  initialState: {
    formData: {
      displayName: "",
      email: "",
      password: "",
    },
    error: {},
    status: "idle", // fixed typo: "idel" to "idle"
    errorMessage: null,
  },
  reducers: {
    updateFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpUser.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signUpUser.fulfilled, (state) => {
        state.status = "succeeded";
        state.formData = {
          displayName: "",
          email: "",
          password: "",
        };
        state.error = {};
      })
      .addCase(signUpUser.rejected, (state, action) => {
        state.status = "failed";
        state.errorMessage = action.payload;
      });
  }
});

export const { updateFormData, setError } = signupSlice.actions;

export default signupSlice.reducer;


