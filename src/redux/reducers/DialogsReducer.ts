import {v1} from "uuid";

export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessageType[]
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
}


type AddMessageActionType = ReturnType<typeof addMessageAC>
export type DialogsActionsType = AddMessageActionType


export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsPageType => {
    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage: MessageType = {id: v1(), message: action.message}
            return {...state, messages: [...state.messages, newMessage]}

        default:
            return state
    }
}



export const addMessageAC = (message: string) => {
    return {
        type: "ADD-MESSAGE",
        message
    } as const
}
