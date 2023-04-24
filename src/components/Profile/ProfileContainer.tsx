import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    getUserProfile,
    ProfileType,
} from "../../redux/reducers/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

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
type ProfileContainerPropsType = RouteComponentProps<ParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
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


export default compose<React.ComponentType>(connect(mapStateToProps, {getUserProfile}), withRouter, withAuthRedirect)(ProfileContainer)