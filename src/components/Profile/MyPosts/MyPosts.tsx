import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsDataType} from "../../../redux/state";



type MyPostsPropsType = {
    postsState: PostsDataType[]
}


const MyPosts = (props: MyPostsPropsType) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        alert(newPostElement.current?.value)
    }



    let postsElement = props.postsState.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} className={s.textarea} placeholder="What's new?"></textarea>
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

export default MyPosts;