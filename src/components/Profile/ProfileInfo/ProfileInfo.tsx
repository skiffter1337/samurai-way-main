import React from 'react';
import s from "../Profile.module.css";

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.img}
                     src="https://cdn.freelance.ru/img/portfolio/pics/00/38/39/3684699.jpg?mt=60e595fd"/>
            </div>
            <div>
                <img className={s.descriptionBlock}/>
                ava + desc
            </div>
        </div>
    );
};

