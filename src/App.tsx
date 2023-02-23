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
import {StateType} from "./redux/state";
import {Friends} from "./components/Friends/Friends";

type AppType = {
    state: StateType
    addPost: (postMessage: string)=>void
    addMessage: (newMessage: string)=>void
    updateNewMessageText: (newMessageText: string)=>void
    updateNewPostText: (newText: string)=>void


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
                        addMessage={props.addMessage}
                        updateNewMessageText={props.updateNewMessageText}/>}/>
                    <Route path="/profile" element={<Profile
                        addPost={props.addPost}
                        profilePage={props.state.profilePage}
                        updateNewPostText={props.updateNewPostText}
                    />}/>
                    <Route path="/news" element={News}/>
                    <Route path="/music" element={Music}/>
                    <Route path="/settings" element={Settings}/>
                    <Route path="/friends" element={<Friends/>}/>
                </Routes>
            </div>
        </div>


    );
}


export default App;
