import {v1} from "uuid";
import {rerenderEntireTree} from "../render";


export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type SidebarType = {
    sidebarData: SidebarDataType[]
}

export type SidebarDataType = {
    name: string
}
export type ProfilePageType = {
    posts: PostsDataType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogDataType[]
    messages: MessageType[]
    newMessageText: string
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
            {id: v1(), message: "It's my first post!", likesCount: 20}

        ],
        newPostText: ""
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
        ],
        newMessageText: ""
    },
    sidebar: {
        sidebarData: [
            {name: "Egor"},
            {name: "Pavel"},
            {name: "Ilya"}
        ]
    }
}

export const addPost = () => {
    let newPost: PostsDataType = {
            id: v1(),
            message: state.profilePage.newPostText,
            likesCount: 0
        }
    state.profilePage.posts.unshift(newPost)
    state.profilePage.newPostText = ""
    rerenderEntireTree(state)

}


export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newMessage: MessageType = {id: v1(), message: state.dialogsPage.newMessageText}
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ""
    rerenderEntireTree(state)
}


export const updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}