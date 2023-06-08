import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
    likesCount: number
    deletePost: (id: string) => void
    id: string
}

const Post = (props: MessageType) => {


    const deletePostHandler = () => {
      props.deletePost(props.id)
    }

    return (
        <div className={s.posts}>

            <div className={s.item}><img src=""/>
                {props.message}  <button onClick={deletePostHandler}>x</button>
                <div>
                <button>Like</button> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;