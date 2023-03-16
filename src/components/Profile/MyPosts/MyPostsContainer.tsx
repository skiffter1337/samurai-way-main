import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {StoreType} from "../../../redux/redux-store";
type MyPostsContainerPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

    let state = props.store.getState()
    const addPost = () => props.store.dispatch(addPostAC())
    const onPostChange = (newText: string) => props.store.dispatch(updateNewPostTextAC(newText))

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    updateNewPostText={onPostChange}
                    addPost={addPost}


    />
}

