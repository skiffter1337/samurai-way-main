import React from 'react';
import {connect} from 'react-redux';
import {
    changeCurrentPage,
    follow,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/reducers/UsersReducer";
import {AppStoreType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

type MapStateToPropsType = {
    usersPage: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (items: UserType[]) => void
    changeCurrentPage: (page: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (flag: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)

            })
    }

    changeCurrentPageHandler = (page: number) => {
        this.props.toggleIsFetching(true)
        this.props.changeCurrentPage(page)
        userAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
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
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage.items,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    changeCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersContainer)