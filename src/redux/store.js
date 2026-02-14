import { combineReducers, legacy_createStore } from "redux";
import inputTextReducer from "./reducers/inputTextReducer";
import tasksReducer from './reducers/tasksReducer'

const store = legacy_createStore(combineReducers({
    inputText: inputTextReducer,
    tasks: tasksReducer
}))
export default store