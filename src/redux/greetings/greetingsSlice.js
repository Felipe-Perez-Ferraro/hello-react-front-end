import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  greetings: [],
  isFetched: false,
};

export const fetchGreetings = createAsyncThunk(
  'greetings/fetchgreetings',
  async () => {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const result = await response.json();
    return result;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.greetings = action.payload;
      state.isFetched = true;
    });
  },
});

export default greetingsSlice.reducer;
