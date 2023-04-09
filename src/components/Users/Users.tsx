import React from 'react';
import userPhoto from "../../assets/images/profile-anonymous2.png";
import s from "./Users.module.css";
import {UserType} from "../../redux/UsersReducer";


type UsersType = {
    totalCount: number
    currentPage: number
    usersPage: UserType[]
    pageSize: number


    changeCurrentPage: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}


export const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalCount / props.pageSize / 100)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {pages.map(p => {

                return (
                    <span className={p === props.currentPage ? s.selected_page : ""}
                          onClick={() => props.changeCurrentPage(p)}>{` ${p} `}</span>
                )
            })}
            {
                props.usersPage.map(u => {
                    const followHandler = () => props.follow(u.id)
                    const unfollowHandler = () => props.unfollow(u.id)

                    return (
                        <div key={u.id}>
                        <span>
                            <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPic}/></div>
                            <div>{!u.followed ? <button onClick={followHandler}>Follow</button> :
                                <button onClick={unfollowHandler}>Unfollow</button>}</div>
                        </span>
                            <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
        </>
    )
};

