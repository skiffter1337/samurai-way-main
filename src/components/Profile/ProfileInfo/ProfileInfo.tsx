import React from 'react';
import s from "../Profile.module.css";
import {ProfilePhotosType, ProfileType} from "../../../redux/ProfileReducer";
import profilePic from './../../../assets/images/profile-anonymous2.png'
import {Preloader} from "../../common/Preloader/Preloader";

type ProfileInfoComponentType = {
    profile: ProfileType
}
export const ProfileInfo = (props: ProfileInfoComponentType) => {

    console.log(props.profile.photos)
    if (!props.profile.photos) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
            </div>
            <div className={s.profile}>
                <img className={s.profilePic} src={props.profile.photos ? props.profile.photos.small : profilePic}/>
                <div>
                    <div><span>{props.profile.fullName}</span></div>
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

