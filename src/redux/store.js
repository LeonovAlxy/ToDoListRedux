import { configureStore, combineReducers } from "@reduxjs/toolkit";
import inputTextSlice from "./slices/inputTextSlice";
import tasksSlice from "./slices/tasksSlice";

const store = configureStore({
  reducer: combineReducers({
    inputText: inputTextSlice,
    tasks: tasksSlice,
  }),
});
export default store;
