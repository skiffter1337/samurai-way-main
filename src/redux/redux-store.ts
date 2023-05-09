import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/ProfileReducer";
import {dialogsReducer} from "./reducers/DialogsReducer";
import {usersReducer} from "./reducers/UsersReducer";
import {authReducer} from "./reducers/authReducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form';



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
    // sidebar: sideBarReducer,
})
export type AppStoreType = ReturnType<typeof reducers>
export let store = createStore(reducers, applyMiddleware(thunk))


// @ts-ignore
window.store = store