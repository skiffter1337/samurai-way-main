import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <img src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
            <div><img src="https://villagecreed.com/assets/images/default-profile.png"/> ava + desc</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;