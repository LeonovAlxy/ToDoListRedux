import { useDispatch } from "react-redux";
import { reverseTaskAction } from "../redux/actions/tasksActions";
const Sort = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reverseTaskAction());
  };
  return (
    <button className="Sort" onClick={() => handleClick()}>
      &#9650; &#9660;
    </button>
  );
};
export default Sort;
