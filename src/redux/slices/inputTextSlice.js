import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "test",
};

const inputTextSlice = createSlice({
  name: "inputText",
  initialState,
  reducers: {
    change(state, action) {
      state.value = action.payload;
    },
    zero(state) {
      state.value = "";
    },
  },
});
export const { change, zero } = inputTextSlice.actions;
export default inputTextSlice.reducer;
