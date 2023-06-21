import React, {ChangeEvent} from 'react';
import s from "../Profile.module.css";
import {ProfileType} from "../../../redux/reducers/ProfileReducer";
import profilePic from './../../../assets/images/profile-anonymous2.png'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import profile from "../Profile";

type ProfileInfoComponentType = {
    profile: ProfileType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    changePhoto: (file: File) => void
}


export const ProfileInfo = (props: ProfileInfoComponentType) => {

    const changeProfilePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
           props.changePhoto(e.target.files[0])
        }

    }


    if (!props.profile.photos) {
        return <Preloader/>
    }
    console.log(props.profile.photos.large)
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
                {props.isOwner && <input type='file' onChange={changeProfilePhoto}/>}
            </div>
            <div className={s.profile}>
                <img className={s.profilePic} src={props.profile.photos.large || profilePic}/>
                <div>
                    <div><span>{props.profile.fullName}</span></div>
                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
                    <div><span>{props.profile.aboutMe}</span></div>
                </div>
                <br/>
                <div>
                    Contacts
                    <ul>
                        <li>FaceBook: {props.profile.contacts.facebook}</li>
                        <li>WebSite: {props.profile.contacts.website}</li>
                        <li>VK: {props.profile.contacts.vk}</li>
                        <li>YT: {props.profile.contacts.youtube}</li>
                        <li>Github: {props.profile.contacts.github}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

