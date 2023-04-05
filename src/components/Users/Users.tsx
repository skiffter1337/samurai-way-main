import React from 'react';
import s from './Users.module.css'
import userPhoto from '../../assets/images/profile-anonymous2.png'


import {UsersPropsType} from "./UsersContainer";
import axios from "axios";



export class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        alert("new")
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                console.log(response.data)
                this.props.setUsers(response.data.items)
            })

    }
        render() {
            return (
                <>
                    {
                        this.props.usersPage.map(u => {
                            const followHandler = () => this.props.follow(u.id)
                            const unfollowHandler = () => this.props.unfollow(u.id)

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
        }
    }













