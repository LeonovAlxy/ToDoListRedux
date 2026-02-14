import { useState } from "react";
import { useDispatch } from "react-redux";
import TaskEdit from "./TaskEdit";
import {
  deleteTaskAction,
  switchIsDoneAction,
  updateTaskAction,
} from "../redux/actions/tasksActions";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteTaskAction(id));
  };

  const switchIsDone = (id) => {
    dispatch(switchIsDoneAction(id));
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (newTitle) => {
    if (newTitle !== "") {
      dispatch(updateTaskAction(task.id, newTitle));
    }
    setIsEditing(false);
  };

  return (
    <div className="Task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => switchIsDone(task.id)}
      />
      {isEditing ? (
        <TaskEdit
          initialTitle={task.title}
          onSave={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <p className={task.isDone ? "active" : ""}>{task.title}</p>
          <button onClick={handleStartEdit}>change</button>
        </>
      )}
      <button onClick={() => handleDeleteClick(task.id)}>delete</button>
    </div>
  );
};
export default Task;
