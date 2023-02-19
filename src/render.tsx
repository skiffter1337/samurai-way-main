import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {addMessage, addPost, StateType} from "./redux/state";



export let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render( <BrowserRouter><App state={state} addPost={addPost} addMessage={addMessage}/></BrowserRouter>,document.getElementById('root'));

}