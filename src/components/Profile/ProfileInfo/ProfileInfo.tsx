import React from 'react';
import s from "../Profile.module.css";
import {ProfilePhotosType, ProfileType} from "../../../redux/ProfileReducer";
import profilePic from './../../../assets/images/profile-anonymous2.png'
import {Preloader} from "../../common/Preloader/Preloader";
type ProfileInfoComponentType = {
    photos: ProfilePhotosType
}
export const ProfileInfo = (props: ProfileInfoComponentType) => {

    console.log(props.photos)
    if(props.photos === undefined) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
            </div>
            <div>
                <img className={s.profilePic} src={ props.photos ? props.photos.small : profilePic}/>

                {/*<div className={s.about}><span>{props.profile.aboutMe}</span></div>*/}
            </div>
        </div>
    );
};

