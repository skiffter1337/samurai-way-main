import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    getUserProfile,
    ProfileType,
    setUserProfile,
} from "../../redux/reducers/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {userAPI} from "../../api/api";


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}

type ParamsType = {
    userId: string
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType

type PropsType = RouteComponentProps<ParamsType> & ProfilePropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = "2"
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props.profile} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => ({profile: state.profilePage.profile})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);