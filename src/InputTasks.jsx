import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { add } from "./redux/slices/tasksSlice";
import { change, zero } from "./redux/slices/inputTextSlice";

const InputTask = () => {
  const [error, setError] = useState("");
  const inputText = useSelector((store) => store.inputText.value);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(change(e.target.value));
    setError("");
  };
  const handleSubmit = () => {
    if (inputText.trim() === "") {
      setError("Название не может быть пустым или состоять только из пробелов");
    } else {
      dispatch(add(inputText));
      setError("");
      dispatch(zero());
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
