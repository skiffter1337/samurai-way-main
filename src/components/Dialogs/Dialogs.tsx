import React from 'react';
import s from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {message} from "antd";

export type DialogsPropsType = {
    dialogData: DialogDataType[]
    messages: MessageType[]
}

type DialogDataType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

let dialogs: DialogDataType[] = [
    {id: 1, name: "Ann"},
    {id: 2, name: "Ivan"},
    {id: 3, name: "Bob"},
    {id: 4, name: "John"},
    {id: 5, name: "Pavel"}
]

let messages = [
    {id: 1, message: "Hi"},
    {id: 2, message: "Yo"},
    {id: 3, message: "Yo"},
    {id: 4, message: "Yo"},
    {id: 5, message: "Yo"},
    {id: 6, message: "Hi"},
    {id: 7, message: "Bye"}
]

let dialogsElement = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)
let messagesElement = messages.map(message => <Message message={message.message} id={message.id}/>)

export const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                    {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElement}
            </div>
        </div>
    );
};

