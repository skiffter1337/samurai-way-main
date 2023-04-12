import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/ProfileReducer";
import {dialogsReducer} from "./reducers/DialogsReducer";
import {usersReducer} from "./reducers/UsersReducer";
import {authReducer} from "./reducers/authReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    // sidebar: sideBarReducer,
})
export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers)


// @ts-ignore
window.store = store