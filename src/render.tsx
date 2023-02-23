import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addMessage, addPost, StateType, updateNewMessageText, updateNewPostText} from "./redux/state";



export let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render( <BrowserRouter><App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/></BrowserRouter>,document.getElementById('root'));

}