import React from 'react';
import s from './Users.module.css'

import {v1} from "uuid";

import {UsersPropsType} from "./UsersContainer";



export const Users = (props: UsersPropsType) => {
    if(props.usersPage.length === 0) {
    props.setUsers([
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Ilia", status: "retarded one", isFriend: false, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Anton", status: "retarded two", isFriend: false, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Danil", status: "retarded", isFriend: true, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Petya", status: "retarded one", isFriend: true, location: {city: "Ivanovo", country: "Russia"}},
    ])
    }
    const mappedUsers = props.usersPage.map(u => {
        const followHandler = () => props.follow(u.id)
        const unfollowHandler = () => props.unfollow(u.id)
        return (
            <div key={u.id}>
                        <span>
                            <div><img src={u.photoUrl} className={s.userPic}/></div>
                            <div>{!u.isFriend ? <button onClick={followHandler}>Follow</button> : <button onClick={unfollowHandler}>Unfollow</button>}</div>
                        </span>
                <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{u.location.country}</div>
                                <div>{u.location.city}</div>
                            </span>
                        </span>
            </div>
        )
    })

    return (
        <div>
            {mappedUsers}
        </div>
    );
};

















