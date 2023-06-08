import React from 'react';
import userPhoto from "../../assets/images/profile-anonymous2.png";
import s from "./Users.module.css";
import {PhotosType} from "../../redux/reducers/UsersReducer";
import {NavLink} from "react-router-dom";


type UserType = {
    userId: number
    status: null | string
    name: string
    followed: boolean
    photos: PhotosType
    followingInProgress: number[]

    follow: (id: number) => void
    unfollow: (id: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}


export const User: React.FC<UserType> =
    ({
         userId,
         name,
         photos,
         status,
         followed,
         followingInProgress,
         followTC,
         unfollowTC
     }) => {

        return (
            <>
                <div key={userId}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + userId}><img src={photos.small !== null ? photos.small : userPhoto}
                                                                className={s.userPic}/></NavLink>
                            </div>
                            <div>{!followed
                                ? <button onClick={() => followTC(userId)}
                                          disabled={followingInProgress.some(id => id === userId)}>Follow</button>
                                : <button onClick={() => unfollowTC(userId)}
                                          disabled={followingInProgress.some(id => id === userId)}>Unfollow</button>}
                            </div>
                        </span>
                    <span>
                            <span>
                                <div>{name}</div>
                                <div>{status}</div>
                            </span>
                            <span>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </span>
                            </span>
                </div>
                )
            </>
        )
    };

