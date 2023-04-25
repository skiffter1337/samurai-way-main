import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/reducers/ProfileReducer";




type ProfileComponentType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
}


const Profile = (props: ProfileComponentType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus }/>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;