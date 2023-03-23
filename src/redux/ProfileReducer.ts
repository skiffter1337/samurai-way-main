import {v1} from "uuid";
import  {
    AddMessageActionType,
    AddPostActionType,
    PostsDataType, ProfilePageType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./store";



const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let  initialState: ProfilePageType =  {
    posts: [
        {id: v1(), message: "Hello, how are you?", likesCount: 10},
        {id: v1(), message: "It's my first post!", likesCount: 20},
        {id: v1(), message: "It's my first post!", likesCount: 20}

    ],
        newPostText: ""
}

const profileReducer = (state = initialState, action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state = {...state, newPostText: action.newText}
            return state
        default:
            return state
    }
}

export const addPostAC = ():AddPostActionType => ({type: ADD_POST})
export const updateNewPostTextAC = (newText: string): UpdateNewPostTextActionType => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}


export default profileReducer;