import React from "react";
import s from "../../Profile.module.css";
import {ProfileStatus} from "../ProfileStatus/ProfileStatus";
import {ProfileType} from "../../../../redux/reducers/ProfileReducer";
import {Contact} from "./Contact/Contact";

type PropsType = {
    profile: ProfileType
    updateUserStatus: (status: string) => void
    status: string
    activateEditMode: () => void
    isOwner: boolean
}
export const ProfileData: React.FC<PropsType> = ({profile, updateUserStatus, status, activateEditMode, isOwner}) => {



    return (
        <div className={s.profile}>
            <div>
                <div><span>{profile.fullName}</span></div>
                <span><b>Status</b>: <ProfileStatus status={status} updateUserStatus={updateUserStatus}/> </span>
                <div><b>About me</b>: <span>{profile.aboutMe}</span></div>
            </div>
            <br/>
            <div>
                <b> Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <br/>
            <div>
                {profile.lookingForAJob && <span><b>My skills</b>: {profile.lookingForAJobDescription}</span>}
            </div>
            {isOwner && <button onClick={activateEditMode}>Edit </button>}
            <br/>
            <Contact contacts={profile.contacts}/>
        </div>
    )
}