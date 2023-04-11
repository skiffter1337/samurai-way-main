import {v1} from "uuid";

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

type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>
type AddMessageActionType = ReturnType<typeof addMessageAC>
export type DialogsActionsType = AddMessageActionType | UpdateNewMessageTextActionType


export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {id: v1(), message: state.newMessageText}
            return {...state, messages: [...state.messages, newMessage], newMessageText: ""}
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {...state, newMessageText: action.payload.newMessage}
        default:
            return state
    }
}



export const addMessageAC = () => {
    return {
        type: "ADD-MESSAGE"
    } as const
}
export const updateNewMessageTextAC = (newMessage: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        payload: {
            newMessage: newMessage
        }
    } as const
}
