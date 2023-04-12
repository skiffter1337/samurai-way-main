import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/reducers/ProfileReducer";



type MyPostsPropsType = {
    posts: PostsDataType[]
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(post =>
        <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
        />)


    const addPost = () => props.addPost()

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newText = e.currentTarget.value;
        props.updateNewPostText(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={props.newPostText}
                              onChange={onPostChange}
                              className={s.textarea}
                              placeholder="What's new?"
                    />
                </div>
                <div>
                    <button onClick={addPost} type="submit">add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

