import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createAddTaskAction } from "./redux/actions/tasksActions";
const InputTask = () => {
  const [error, setError] = useState("");
  const { inputText } = useSelector((store) => store.inputText);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({ type: "change", payload: e.target.value });
    setError("");
  };
  const handleSubmit = () => {
    if (inputText.trim() === "") {
      setError("Название не может быть пустым или состоять только из пробелов");
    } else {
      dispatch(createAddTaskAction(inputText));
      setError("");
      dispatch({ type: "zero" });
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  const handleClick = () => {
    handleSubmit();
  };

  return (
    <>
      {" "}
      <div className="InputTask">
        <input
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Create task"
          style={{
            borderColor: error ? "red" : undefined,
          }}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      {error && <div className="error">{error}</div>}
    </>
  );
};
export default InputTask;
