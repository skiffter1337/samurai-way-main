import {v1} from "uuid";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}
export type ProfilePageType = {
    posts: PostsDataType[]
}
export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessageType[]
}
export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}
export type DialogDataType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export let state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: "Hello, how are you?", likesCount: 10},
            {id: v1(), message: "It's my first post!", likesCount: 20},
            {id: v1(), message: "It's my first post!", likesCount: 20},
            {id: v1(), message: "It's my first post!", likesCount: 20},
            {id: v1(), message: "It's my first post!", likesCount: 20},
            {id: v1(), message: "It's my first post!", likesCount: 20}
        ],
    },
    dialogsPage: {
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
        ]
    }
}