import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {getUserAuthDataTC, logoutTC} from "../../redux/reducers/authReducer";




type MapDispatchToPropsType = {
    getUserAuthDataTC: () => void
    logoutTC: () => void
}

type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

type HeaderContainerType = MapDispatchToPropsType & MapStateToPropsType

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getUserAuthDataTC()
    }


    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logoutTC={this.props.logoutTC}/>
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


export default connect(mapStateToProps, {getUserAuthDataTC, logoutTC})(HeaderContainer)