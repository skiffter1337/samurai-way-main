import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";


type MyPostsPropsType = {
    postsState: PostsDataType[]
    addPost: (postMessage: string) => void
}


const MyPosts = (props: MyPostsPropsType) => {

    const [addPostTitle, setAddPostTitle] = useState("")

    const onChangeAddPost = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setAddPostTitle(event.currentTarget.value)
    }


    const addPostCallback = () => {
        props.addPost(addPostTitle)
        setAddPostTitle("")
    }


    let postsElement = props.postsState.map(post => <Post key={post.id} message={post.message}
                                                          likesCount={post.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea value={addPostTitle} onChange={onChangeAddPost} className={s.textarea}
                              placeholder="What's new?"></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback} type="submit">add post</button>
                </div>
                <div className={s.posts}>
                    {postsElement}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;