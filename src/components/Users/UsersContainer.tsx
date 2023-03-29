import React from 'react';
import {connect} from "react-redux";
import {Users} from "./Users";
import {StateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/UsersReducer";
import {Dispatch} from "redux";


type MapStateToPropsType = {
    usersPage: UserType[]
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: StateType) : MapStateToPropsType => {
    return {
        usersPage: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)