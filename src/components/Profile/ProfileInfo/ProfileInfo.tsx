import React, {ChangeEvent, useState} from 'react';
import s from "../Profile.module.css";
import {ProfileType, saveProfileTC} from "../../../redux/reducers/ProfileReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileData} from "./ProfileData/ProfileData";
import profilePic from "../../../assets/images/profile-anonymous2.png";
import {ProfileDataFormType, ReduxProfileForm} from "./ProfileData/ProfileDataForm/ProfileDataForm";

type PropsType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    changePhoto: (file: File) => void
    saveProfileTC: (formData: ProfileDataFormType) => void
}


export const ProfileInfo: React.FC<PropsType> = (
    {
        profile,
        changePhoto,
        isOwner,
        updateUserStatus,
        status,
        saveProfileTC
    }) => {


    const [editMode, setEditMode] = useState<boolean>(false)

    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {

        setEditMode(false)
    }
    const changeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            changePhoto(e.target.files[0])
        }

    }

    const onSubmit = (formData: ProfileDataFormType) => {
       let pr = saveProfileTC(formData)
        setEditMode(false)
    }

    if (!profile.photos) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
                {isOwner && <input type='file' onChange={changeProfilePhoto}/>}
            </div>
            <img className={s.profilePic} src={profile.photos.large || profilePic}/>
            {editMode ?
                <ReduxProfileForm initialValues={profile} profile={profile} deactivateEditMode={deactivateEditMode}
                                  onSubmit={onSubmit}/> :
                <ProfileData profile={profile} updateUserStatus={updateUserStatus} status={status} isOwner={isOwner}
                             activateEditMode={activateEditMode}/>
            }
        </div>
    );
};








