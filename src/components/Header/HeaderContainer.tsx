import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {setUserAuthData, UserDataType} from "../../redux/reducers/authReducer";
import {userAPI} from "../../api/api";



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
        userAPI.getUserAuthData()
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.setUserAuthData(data.data)
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