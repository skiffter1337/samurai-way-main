import React from 'react';
import userPhoto from "../../assets/images/profile-anonymous2.png";
import s from "./Users.module.css";
import {UserType} from "../../redux/reducers/UsersReducer";
import {NavLink} from "react-router-dom";



type UsersType = {
    totalCount: number
    currentPage: number
    usersPage: UserType[]
    pageSize: number
    followingInProgress: number[]

    changeCurrentPage: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void


    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
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
                    return (
                        <div key={u.id}>
                        <span>
                            <div>
                              <NavLink to={"/profile/" + u.id}><img
                                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                                  className={s.userPic}/></NavLink>
                            </div>
                            <div>{!u.followed
                                ? <button onClick={() => props.followTC(u.id)} disabled={props.followingInProgress.some(id => id === u.id)}>Follow</button>
                                : <button onClick={() => props.unfollowTC(u.id)} disabled={props.followingInProgress.some(id => id === u.id)}>Unfollow</button>}
                            </div>
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

