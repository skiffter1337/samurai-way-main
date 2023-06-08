import React from "react";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {addPost, deletePost, ProfileActionsType} from "../../../redux/reducers/ProfileReducer";
import {AppStoreType} from "../../../redux/redux-store";

let mapStateToProps = (state: AppStoreType) => {
    return {
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch: (action: ProfileActionsType) => void) => {
    return {
        addPost: (postText: string) => {
            dispatch(addPost(postText))
        },
        deletePost: (id: string) => {
            dispatch(deletePost(id))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
