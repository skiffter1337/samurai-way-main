import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


type MyPostsPropsType = {
    postData: postsDataType[]
}

type postsDataType = {
    id: number
    message: string
    likesCount: number
}

let posts: postsDataType[] = [
    {id: 1, message: "Hello, how are you?", likesCount: 10},
    {id: 2, message: "It's my first post!", likesCount: 20},
    {id: 2, message: "It's my first post!", likesCount: 20},
    {id: 2, message: "It's my first post!", likesCount: 20},
    {id: 2, message: "It's my first post!", likesCount: 20},
    {id: 2, message: "It's my first post!", likesCount: 20}
]
let postsElement = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea className={s.textarea} value="What's new?"></textarea>
                </div>
                <div>
                    <button type="submit">add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;