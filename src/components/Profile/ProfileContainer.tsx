import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    ProfileType,
    setUserProfile,
} from "../../redux/reducers/ProfileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
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
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props.profile} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => ({profile: state.profilePage.profile})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);