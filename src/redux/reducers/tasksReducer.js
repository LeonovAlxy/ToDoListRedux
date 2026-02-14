const initialValue = {
    tasks: [{ id: crypto.randomUUID(), title: "Купить что-то", isDone: false }]
}

const inputTextReducer = (store = initialValue, action) => {
    switch (action.type) {
        case 'add':
            return { ...store, tasks: [...store.tasks, { id: crypto.randomUUID(), title: action.payload, isDone: false }] }
        case 'delete':
            return { ...store, tasks: [...store.tasks].filter((item) => item.id !== action.payload) }

        case 'switchIsDone':
            return {
                ...store, tasks: [...store.tasks].map((item) =>
                    item.id === action.payload ? { ...item, isDone: !item.isDone } : item,
                )
            }
        case 'update':
            return {
                ...store,
                tasks: store.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, title: action.payload.newTitle } : task
                ),
            };
        case 'reverse':
            return { ...store, tasks: store.tasks.reverse() }

        case 'removeFinished':
            return { ...store, tasks: [...store.tasks].filter((task) => !task.isDone) }

        default:
            return store;
    }

}
export default inputTextReducer