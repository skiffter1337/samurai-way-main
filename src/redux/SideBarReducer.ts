import {
    AddMessageActionType,
    AddPostActionType, SidebarType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./state";


const sideBarReducer = (state: SidebarType, action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => {
     if(action) {

     }
     return state
}

export default sideBarReducer;