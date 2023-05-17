import React from 'react';
import {connect} from 'react-redux';
import {
    changeCurrentPage, changeCurrentPageTC,
    follow, followTC, getUsers,
    setTotalUsersCount,
    unfollow, unfollowTC,
    UserType
} from "../../redux/reducers/UsersReducer";
import {AppStoreType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPageFromState, getFollowingInProgressFromState, getIsFetchingFromState,
    getPageSizeFromState,
    getTotalCountFromState,
    getUsersFromState
} from "../../redux/reducers/UsersSelector";


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
    getUsers: (currentPage: number, pageSize: number) => void
    changeCurrentPageTC: (page: number, pageSize: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    changeCurrentPageHandler = (page: number) => this.props.changeCurrentPageTC(page, this.props.pageSize)


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
                followingInProgress={this.props.followingInProgress}
                followTC={this.props.followTC}
                unfollowTC={this.props.unfollowTC}
            />
        </>
    }
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        usersPage: getPageSizeFromState(state),
        pageSize: getUsersFromState(state),
        totalCount: getTotalCountFromState(state),
        currentPage: getCurrentPageFromState(state),
        isFetching: getIsFetchingFromState(state),
        followingInProgress: getFollowingInProgressFromState(state)
    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, {
    follow,
    unfollow,
    changeCurrentPage,
    setTotalUsersCount,
    getUsers,
    changeCurrentPageTC,
    followTC,
    unfollowTC
}))(UsersContainer)

