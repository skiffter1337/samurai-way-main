import React from 'react';
import s from './Dialogs.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {message} from "antd";
import {DialogDataType, MessageType} from "../../index";
import profile from "../Profile/Profile";

export type DialogsPropsType = {
    dialogs: DialogDataType[]
    messages: MessageType[]
}




export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    let messagesElement = props.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)
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

