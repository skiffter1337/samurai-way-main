import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    getUserProfile, getUserStatus,
    ProfileType, updateUserStatus,
} from "../../redux/reducers/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {profileAPI} from "../../api/api";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
}
type ParamsType = {
    userId: string
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<ParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "2"
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {

        return (
            <Profile {...this.props.profile} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}), withRouter, withAuthRedirect)(ProfileContainer)