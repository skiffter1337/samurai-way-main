import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.posts}>
            <div className={s.item}><img src="https://www.meme-arsenal.com/memes/fcf0b09c0d87caac3091b06fd8a7b4ff.jpg"/>
                post 1
            </div>
            <div>
                <button>Like</button>
            </div>
        </div>
    )
}

export default Post;