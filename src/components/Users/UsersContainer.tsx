import React from 'react';
import {connect} from 'react-redux';
import {
    changeCurrentPageAC,
    followAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    UserType
} from "../../redux/UsersReducer";
import {Dispatch} from 'redux';
import {AppStoreType} from '../../redux/redux-store';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";

type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
}

type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    changeCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (flag: boolean) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })

    }

    changeCurrentPageHandler = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.changeCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
                {this.props.isFetching ? <Preloader/> : null}
            <Users
                changeCurrentPage={this.changeCurrentPageHandler}
                pageSize={this.props.pageSize}
                totalCount={this.props.totalCount}
                currentPage={this.props.currentPage}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </>
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
        },
        toggleIsFetching: (flag: boolean) => {
            dispatch(toggleIsFetchingAC(flag))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)