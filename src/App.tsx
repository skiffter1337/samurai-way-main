import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {
    AddMessageActionType,
    AddPostActionType,
    StateType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "./redux/store";
import {Friends} from "./components/Friends/Friends";
import {Error404} from "./components/Error404/Error404";

type AppType = {
    state: StateType
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType |  AddMessageActionType | UpdateNewMessageTextActionType) => void


}

const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<Dialogs
                        dialogsPage={props.state.dialogsPage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/profile" element={<Profile
                        profilePage={props.state.profilePage}
                        dispatch={props.dispatch}
                    />}/>
                    <Route path="/news" element={News}/>
                    <Route path="/music" element={Music}/>
                    <Route path="/settings" element={Settings}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/*" element={<Error404/>}/>
                </Routes>
            </div>
        </div>


    );
}


export default App;
