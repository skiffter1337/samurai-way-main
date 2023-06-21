import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    changePhoto,
    getUserProfile,
    getUserStatus,
    ProfileType,
    updateUserStatus,
} from "../../redux/reducers/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type MapStateToPropsType = {
    profile: ProfileType
    status: string
    autorizedUserID: number | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    changePhoto: (file: File) => void
}
type ParamsType = {
    userId: string
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
type ProfileContainerPropsType = RouteComponentProps<ParamsType> & ProfilePropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {


    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "" + this.props.autorizedUserID
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }


    render() {
        return (
            <Profile {...this.props.profile} profile={this.props.profile} status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus} isOwner={!this.props.match.params.userId}
                     changePhoto={this.props.changePhoto}
            />
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth
})


export default compose<React.ComponentType>(connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateUserStatus,
    changePhoto
}), withRouter, withAuthRedirect)(ProfileContainer)