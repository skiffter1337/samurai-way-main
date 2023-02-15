import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {v1} from "uuid";

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}

export type DialogDataType = {
    id: string
    name: string
}

export type MessageType = {
    id: string
    message: string
}

let posts: PostsDataType[] = [
    {id: v1(), message: "Hello, how are you?", likesCount: 10},
    {id: v1(), message: "It's my first post!", likesCount: 20},
    {id: v1(), message: "It's my first post!", likesCount: 20},
    {id: v1(), message: "It's my first post!", likesCount: 20},
    {id: v1(), message: "It's my first post!", likesCount: 20},
    {id: v1(), message: "It's my first post!", likesCount: 20}
]


let dialogs: DialogDataType[] = [
    {id: v1(), name: "Ann"},
    {id: v1(), name: "Ivan"},
    {id: v1(), name: "Bob"},
    {id: v1(), name: "John"},
    {id: v1(), name: "Pavel"}
]

let messages = [
    {id: v1(), message: "Hi"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Yo"},
    {id: v1(), message: "Hi"},
    {id: v1(), message: "Bye"}
]


ReactDOM.render( <BrowserRouter><App posts={posts} dialogs={dialogs} messages={messages}/></BrowserRouter>,document.getElementById('root'));

