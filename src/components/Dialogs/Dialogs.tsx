import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

export type DialogsPropsType = {
    state: DialogsPageType
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

let newMessageElement = React.createRef<HTMLTextAreaElement>();
    
    const addMessage = () => {
      alert(newMessageElement.current?.value)

    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElement}
                <textarea ref={newMessageElement} placeholder={"new message"}></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>
    );
};

