import {applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileActionsType, profileReducer} from "./reducers/ProfileReducer";
import {DialogsActionsType, dialogsReducer} from "./reducers/DialogsReducer";
import {UsersActionType, usersReducer} from "./reducers/UsersReducer";
import {AuthActionsType, authReducer} from "./reducers/authReducer";
import thunk, {ThunkDispatch} from "redux-thunk";
import {FormAction, reducer as formReducer} from 'redux-form';
import {appReducer, AppReducerActionsType} from "./reducers/appReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
    // sidebar: sideBarReducer,
})
export type AppStoreType = ReturnType<typeof reducers>
export type AppDispatchType = ThunkDispatch<AppStoreType, unknown, AppDomainActionsType>
export type AppDomainActionsType = AuthActionsType | DialogsActionsType | ProfileActionsType | UsersActionType | FormAction | AppReducerActionsType
export let store = createStore(reducers, applyMiddleware(thunk))


// @ts-ignore
window.store = store