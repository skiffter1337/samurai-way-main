import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./UsersReducer";


// export type StoreType = {
//     _state: StateType
//     _callSubscriber: (state: StateType) => void
//     getState: () => StateType
//     subscribe: (observer: (state: StateType) => void) => void
//     dispatch: (action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => void
// }


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    // sidebar: sideBarReducer,
})
export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers)