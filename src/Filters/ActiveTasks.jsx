import { useSelector, useDispatch } from "react-redux";
import { removeFinished } from "../redux/slices/tasksSlice";

const ActiveCounter = () => {
  const { tasks } = useSelector((store) => store.tasks);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeFinished());
  };
  const activeTasks = tasks.filter((item) => !item.isDone);
  return (
    <div className="ActiveCounter">
      <p>Active: {activeTasks.length}</p>
      <button onClick={handleClick}>Remove fulfilled tasks</button>
    </div>
  );
};
export default ActiveCounter;
