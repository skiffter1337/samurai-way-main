import {combineReducers, createStore} from "redux";
import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sideBarReducer from "./SideBarReducer";
import {
    AddMessageActionType,
    AddPostActionType,
    StateType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./store";


export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => void
}


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sideBarReducer
})
export let store = createStore(reducers)