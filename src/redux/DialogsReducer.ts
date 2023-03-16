import {v1} from "uuid";
import {
    AddMessageActionType,
    AddPostActionType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./store";

export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessageType[]
    newMessageText: string
}
export type DialogDataType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}


const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState: DialogsPageType = {
    dialogs: [
        {id: v1(), name: "Ann"},
        {id: v1(), name: "Ivan"},
        {id: v1(), name: "Bob"},
        {id: v1(), name: "John"},
        {id: v1(), name: "Pavel"}
    ],
        messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Yo"},
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Bye"}
    ],
        newMessageText: ""
}

const dialogsReducer = (state = initialState, action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType): DialogsPageType=> {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {id: v1(), message: state.newMessageText}
            state.messages.push(newMessage)
            state.newMessageText = ""
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = ():AddMessageActionType  => ({type: ADD_MESSAGE})
export const updateNewMessageTextAC = (newMessage: string):UpdateNewMessageTextActionType => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage}
}

export default dialogsReducer;