import { useState } from "react";
import { useDispatch } from "react-redux";
import TaskEdit from "./TaskEdit";
import { deleteTask, switchIsDone, update } from "../redux/slices/tasksSlice";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteClick = (id) => {
    dispatch(deleteTask(id));
  };

  const switchDoneTasks = (id) => {
    dispatch(switchIsDone(id));
  };

  const handleStartEdit = () => {
    setIsEditing(true);
  };
  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = (newTitle) => {
    if (newTitle !== "") {
      dispatch(update({ id: task.id, newTitle }));
    }
    setIsEditing(false);
  };

  return (
    <div className="Task">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => switchDoneTasks(task.id)}
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
