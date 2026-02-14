export const createAddTaskAction = (inputText) => ({ type: "add", payload: inputText })
export const deleteTaskAction = (id) => ({ type: "delete", payload: id })
export const switchIsDoneAction = (id) => ({ type: "switchIsDone", payload: id })
export const updateTaskAction = (id, newTitle) => ({
    type: "update",
    payload: { id, newTitle }
});
export const reverseTaskAction = () => ({
    type: "reverse"
});
export const removeFinishedTaskAction = () => ({ type: "removeFinished" })
