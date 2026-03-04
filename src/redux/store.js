import { configureStore } from "@reduxjs/toolkit";
import inputTextSlice from "./slices/inputTextSlice";
import tasksSlice from "./slices/tasksSlice";

const store = configureStore({
  reducer: {
    inputText: inputTextSlice,
    tasks: tasksSlice,
  },
});
export default store;
