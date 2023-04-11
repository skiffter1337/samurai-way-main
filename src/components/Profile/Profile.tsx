import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/ProfileReducer";



type ProfileComponentType = {
    profile: ProfileType
}


const Profile = (props: ProfileComponentType) => {
    console.log(props.profile.photos)
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;