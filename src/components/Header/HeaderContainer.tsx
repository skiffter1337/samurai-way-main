import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import axios from "axios";
import {setUserAuthData, UserDataType} from "../../redux/reducers/authReducer";


type MapDispatchToPropsType = {
    setUserAuthData: (data: UserDataType) => void
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.setUserAuthData(response.data.data)
                }
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
            // {...this.props}
        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}


export default connect(mapStateToProps, {setUserAuthData})(HeaderContainer)