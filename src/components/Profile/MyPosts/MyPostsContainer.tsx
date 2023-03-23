import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext";



export const MyPostsContainer = () => {


    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState()
                    const addPost = () => store.dispatch(addPostAC())
                    const onPostChange = (newText: string) => store.dispatch(updateNewPostTextAC(newText))

                    return <MyPosts posts={state.profilePage.posts}
                                    newPostText={state.profilePage.newPostText}
                                    updateNewPostText={onPostChange}
                                    addPost={addPost}
                    />
                }
            }
        </StoreContext.Consumer>
    )

}

