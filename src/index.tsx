import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {StateType} from "./redux/state";
import store from "./redux/state";


let rerenderEntireTree = (state: StateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>,document.getElementById('root'));

}
rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)


