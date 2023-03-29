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
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: StateType) : MapStateToPropsType => {
    return {
        usersPage: state.usersPage.items
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id))
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (items: UserType[]) => {
            dispatch(setUsersAC(items))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)