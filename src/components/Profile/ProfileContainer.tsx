import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {
    addPost,
    ProfileType,
    setUserProfile,
    updateNewPostText
} from "../../redux/ProfileReducer";



type MapStateToPropsType = {
    profile: ProfileType
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType)=> void
    addPost: ()=> void
    updateNewPostText: (newText: string)=> void
}
type ProfilePropsType = MapStateToPropsType & MapDispatchToPropsType
class ProfileContainer extends React.Component<ProfilePropsType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {

            this.props.setUserProfile(response.data)
        })
    }

    render() {

        return (
            <Profile {...this.props.profile} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return (
        {
            profile: state.profilePage.profile,
        }
    )
}

export default connect(mapStateToProps, {setUserProfile, addPost, updateNewPostText})(ProfileContainer);