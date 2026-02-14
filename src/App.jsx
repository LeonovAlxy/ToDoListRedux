import { useState, useEffect } from "react";
import Header from "./Header/Header";
import InputTask from "./InputTasks";
import ToDoList from "./TasksList/TodoList";
import FilterMain from "./Filters/FilterMain";
import ActiveTasks from "./Filters/ActiveTasks";
import "./App.css";

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Header />
      <InputTask />
      <ToDoList filter={filter} />
      <FilterMain setFilter={setFilter} />
      <ActiveTasks />
    </>
  );
}
// src/
// ├── App.js
// ├── Header/
// │   └── Header.js
// ├── InputTasks/
// │   └── InputTask.js
// ├── TasksList/
// │   ├── ToDoList.js
// │   └── Task.js
// │   └── TaskEdit.js
// ├── Filters/
// │   ├── Filter.js
// │   └── ActiveCounter.js
// ├── Sort/
//   └── Sort.js

export default App;
