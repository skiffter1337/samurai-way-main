import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileType, saveProfileTC} from "../../redux/reducers/ProfileReducer";
import {ProfileDataFormType} from "./ProfileInfo/ProfileData/ProfileDataForm/ProfileDataForm";




type ProfileComponentType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    changePhoto: (file: File) => void
    saveProfileTC: (formData: ProfileDataFormType) => void
}


const Profile = (props: ProfileComponentType) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateUserStatus={props.updateUserStatus }
                isOwner={props.isOwner}
                changePhoto={props.changePhoto}
                saveProfileTC={props.saveProfileTC}
            />
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;