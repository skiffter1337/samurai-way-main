import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
    likesCount: number
}

const Post = (props: MessageType) => {
    return (
        <div className={s.posts}>
            <div className={s.item}><img src="https://www.meme-arsenal.com/memes/fcf0b09c0d87caac3091b06fd8a7b4ff.jpg"/>
                {props.message}
                <div>
                <button>Like</button> {props.likesCount}
                </div>
            </div>
        </div>
    )
}

export default Post;