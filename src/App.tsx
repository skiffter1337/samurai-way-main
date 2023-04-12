import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Friends} from "./components/Friends/Friends";
import {Error404} from "./components/Error404/Error404";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                    <Route path="/dialogs" render={ () => <DialogsContainer/>}/>
                    <Route path="/profile/:userId?" render={ () =><ProfileContainer/>}/>
                    <Route path="/users" render={ () =><UsersContainer/>}/>
                    <Route path="/news" render={ () =>News}/>
                    <Route path="/music" render={ () =>Music}/>
                    <Route path="/settings" render={ () =>Settings}/>
                    <Route path="/friends" render={ () =><Friends/>}/>
                {/*<Route path="/*" render={ () =><Error404/>}/>*/}
            </div>
        </div>


    );
}


export default App;
