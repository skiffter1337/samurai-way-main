import React, {ChangeEvent, useState} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsPageType
    addMessage: (newMessage: string)=>void
}


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.state.dialogs.map(dialog => {
        return (
            <div className={s.friends}>
                <img className={s.img} src="https://cdn.onlinewebfonts.com/svg/img_266351.png"/>
                <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
            </div>
        )
    })
    let messagesElement = props.state.messages.map(message => <Message key={message.id} message={message.message}
                                                                       id={message.id}/>)

    const [newMessage, setNewMessage] = useState("")
    console.log(newMessage)

    const onChangeAddMessageHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setNewMessage(event.currentTarget.value)
    }


    const addNewMessage = () => {
    props.addMessage(newMessage)
        setNewMessage("")
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElement}
                <textarea value={newMessage} onChange={onChangeAddMessageHandler}
                          placeholder={"new message"}></textarea>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    );
};

