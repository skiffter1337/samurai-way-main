import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {StateType} from "./redux/store";
import {Friends} from "./components/Friends/Friends";
import {Error404} from "./components/Error404/Error404";
import {StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppType = {
    state: StateType
    store: StoreType
}

const App = (props: AppType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/dialogs" element={<DialogsContainer
                        store={props.store}
                    />}/>
                    <Route path="/profile" element={<Profile
                        store={props.store}
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
