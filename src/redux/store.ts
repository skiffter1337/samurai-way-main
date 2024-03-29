
import {DialogsPageType} from "./reducers/DialogsReducer";
import {UsersType} from "./reducers/UsersReducer";
// import {AddPostActionType, UpdateNewPostTextActionType} from "./ProfileReducer";


// export type StateType = {
//     profilePage: ProfilePageType
//     dialogsPage: DialogsPageType
//     sidebar: SidebarType
//     usersPage: UsersType
// }


// export type ProfilePageType = {
//     posts: PostsDataType[]
//     newPostText: string
// }
//
// export type PostsDataType = {
//     id: string
//     message: string
//     likesCount: number
// }



// export type AddMessageActionType = {
//     type: "ADD-MESSAGE"
// }
// export type UpdateNewMessageTextActionType = {
//     type: "UPDATE-NEW-MESSAGE-TEXT"
//     newMessage: string
// }

// export type StoreType = {
//     _state: any
//     _callSubscriber: (state: StateType) => void
//     getState: () => StateType
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => void
// }

//
// let store: StoreType = {
//     _state: {
//
//     },
//     _callSubscriber() {
//         console.log("state rendered")
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//     dispatch(action) {
//         // this._state.profilePage = profileReducer(this._state.profilePage, action)
//         // this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         // this._state.sidebar = sideBarReducer(this._state.sidebar, action)
//         this._callSubscriber(this._state)
//     }
// }

// export default store