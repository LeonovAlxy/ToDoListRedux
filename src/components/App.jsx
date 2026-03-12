import { useState } from 'react';

import Header from './Header/Header';

import InputTask from './InputTasks';

import ToDoList from './TasksList/TodoList';

import FilterMain from './Filters/FilterMain';

import ActiveTasks from './Filters/ActiveTasks';

import './App.css';

function App() {
  const [filter, setFilter] = useState('all');

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

export default App;
