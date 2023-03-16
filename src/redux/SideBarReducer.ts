import {
    AddMessageActionType,
    AddPostActionType, SidebarType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./store";


let initialState: SidebarType = {
    sidebarData: [
        {name: "Egor"},
        {name: "Pavel"},
        {name: "Ilya"}
    ]
}


const sideBarReducer = (state = initialState, action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType): SidebarType => {
     if(action) {

     }
     return state
}

export default sideBarReducer;