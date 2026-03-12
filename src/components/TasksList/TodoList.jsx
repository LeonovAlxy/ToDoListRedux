import Task from './Task';

import Sort from '../Sort/Sort';

import { useSelector } from 'react-redux';

import { selectTasks } from '../../redux/slices/tasksSlice';

const ToDoList = ({ filter }) => {
  const tasks = useSelector(selectTasks);
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.isDone;
    if (filter === 'done') return task.isDone;

    return true;
  });

  return (
    <div className="ToDoList">
      <Sort tasks={tasks} />
      {filteredTasks.map((item) => (
        <Task key={item.id} task={item} />
      ))}
    </div>
  );
};

export default ToDoList;
