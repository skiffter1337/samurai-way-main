import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";


type ProfileType = {
    state: ProfilePageType
    addPost: (postMessage: string)=>void
}

const Profile = (props: ProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts postsState={props.state.posts} addPost={props.addPost}/>
        </div>
    );
};

export default Profile;