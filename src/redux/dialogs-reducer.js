const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Valera' },
        { id: 6, name: 'Victor' }
    ],
    messages: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How is your name?' },
        { id: 3, message: 'Yoooo' },
        { id: 4, message: 'ASFASFAS' }
    ],
    newMessageText: 'hello)'
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        }
        default: return state;
    }
}

export const addMessageActionCreator = (newMessageBody) => {
    return {
        type: ADD_MESSAGE,
        newMessage: newMessageBody
    }
}

export default dialogsReducer;