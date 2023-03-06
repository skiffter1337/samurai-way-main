import {v1} from "uuid";


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

export type AddPostActionType = {
    type: "ADD-POST"
}
export type UpdateNewPostTextActionType = {
    type: "UPDATE-NEW-POST-TEXT"
    newText: string
}

export type AddMessageActionType = {
    type: "ADD-MESSAGE"
}
export type UpdateNewMessageTextActionType = {
    type: "UPDATE-NEW-MESSAGE-TEXT"
    newMessage: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => void
}

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store: StoreType = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("state rendered")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost: PostsDataType = {
                id: v1(),
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === "ADD-MESSAGE") {
            let newMessage: MessageType = {id: v1(), message: this._state.dialogsPage.newMessageText}
            this._state.dialogsPage.messages.push(newMessage)
            this._state.dialogsPage.newMessageText = ""
            this._callSubscriber(this._state)
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._state.dialogsPage.newMessageText = action.newMessage
            this._callSubscriber(this._state)
        }
    }
}



export const addPostAC = ():AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}

export const addMessageAC = ():AddMessageActionType  => ({type: ADD_MESSAGE})
export const updateNewMessageTextAC = (newMessage: string):UpdateNewMessageTextActionType => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessage: newMessage}
}





export default store