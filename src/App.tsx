import React, {Suspense} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {connect} from "react-redux";
import {initializeAppTC} from "./redux/reducers/appReducer";
import {AppStoreType} from "./redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";
import HeaderContainer from "./components/Header/HeaderContainer";
// import UsersContainer from "./components/Users/UsersContainer";
// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import Login from "./Login/Login";
const Login = React.lazy(() => import ("./Login/Login"));
const ProfileContainer = React.lazy(() => import ("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import ("./components/Users/UsersContainer"));
const DialogsContainer = React.lazy(() => import ("./components/Dialogs/DialogsContainer"));


type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeAppTC: () => void
}



class App extends React.Component<MapDispatchToPropsType & MapStateToPropsType> {


    componentDidMount() {
        this.props.initializeAppTC()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        } else
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>

                <div className="app-wrapper-content">
                    <Suspense fallback={<div><Preloader/></div>}>
                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                    <Route path="/users" render={() => <UsersContainer/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/news" render={() => News}/>
                    <Route path="/music" render={() => Music}/>
                    <Route path="/settings" render={() => Settings}/>
                    <Route path="/friends" render={() => <Friends/>}/>
                    {/*<Route path="/*" render={ () =><Error404/>}/>*/}
                </Suspense>
                </div>
            </div>


        );
    }
}

const mapStateToProps = (state: AppStoreType): MapStateToPropsType  => {
    return  {
        initialized: state.app.initialized
    }
}

export default connect(mapStateToProps, {initializeAppTC})(App);
