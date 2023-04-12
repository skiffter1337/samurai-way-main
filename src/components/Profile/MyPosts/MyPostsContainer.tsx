import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost, ProfileActionsType, updateNewPostText} from "../../../redux/reducers/ProfileReducer";
import {AppStoreType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void) => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (newText: string) => {
            dispatch(updateNewPostText(newText))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
