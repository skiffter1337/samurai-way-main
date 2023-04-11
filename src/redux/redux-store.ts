import {combineReducers, createStore} from "redux";
import {profileReducer} from "./ProfileReducer";
import {dialogsReducer} from "./DialogsReducer";
import {usersReducer} from "./UsersReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    // sidebar: sideBarReducer,
})
export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers)


// @ts-ignore
window.store = store