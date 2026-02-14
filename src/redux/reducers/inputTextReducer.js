const initialValue = {
    inputText: 'test'
}

const inputTextReducer = (store = initialValue, action) => {
    switch (action.type) {
        case 'change':
            return { ...store, inputText: action.payload }
        case 'zero':
            return { ...store, inputText: '' }


        default:
            return store;
    }

}
export default inputTextReducer