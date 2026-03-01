import { useDispatch } from "react-redux";
import { reverse } from "../redux/slices/tasksSlice";
const Sort = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reverse());
  };
  return (
    <button className="Sort" onClick={() => handleClick()}>
      &#9650; &#9660;
    </button>
  );
};
export default Sort;
