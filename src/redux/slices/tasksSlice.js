import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [{ id: crypto.randomUUID(), title: "Купить что-то", isDone: false }],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    add(state, action) {
      state.tasks.push({
        id: crypto.randomUUID(),
        title: action.payload,
        isDone: false,
      });
    },

    deleteTask(state, action) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },

    switchIsDone(state, action) {
      state.tasks = state.tasks.map((item) =>
        item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
      );
    },

    update(state, action) {
      state.tasks = state.tasks.map((task) =>
        task.id === action.payload.id
          ? { ...task, title: action.payload.newTitle }
          : task,
      );
    },
    reverse(state) {
      state.tasks.reverse();
    },

    removeFinished(state) {
      state.tasks = state.tasks.filter((task) => !task.isDone);
    },
  },
});
export const {
  add,
  deleteTask,
  switchIsDone,
  update,
  reverse,
  removeFinished,
} = tasksSlice.actions;
export default tasksSlice.reducer;
