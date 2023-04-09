import React from 'react';
import {connect} from "react-redux";


import {
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from "../../redux/UsersReducer";
import {Dispatch} from "redux";
import {AppStoreType} from "../../redux/redux-store";
import {Users} from "./Users";




type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
}

type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    changeCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStoreType) : MapStateToPropsType => {
    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage
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
        },
        changeCurrentPage: (page: number) => {
            dispatch(changeCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)