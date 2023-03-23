import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {
    AddMessageActionType,
    AddPostActionType, StateType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "../../../redux/store";






let mapStateToProps = (state: StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType) => void) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostTextAC(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
