import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {
    addMessageAC,
    AddMessageActionType,
    DialogsPageType, updateNewMessageTextAC,
    UpdateNewMessageTextActionType,
} from "../../redux/state";

export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: AddMessageActionType | UpdateNewMessageTextActionType) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    let dialogsElement = props.dialogsPage.dialogs.map(dialog => {
        return (
            <div className={s.friends}>
                <img className={s.img} src="https://cdn.onlinewebfonts.com/svg/img_266351.png"/>
                <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
            </div>
        )
    })
    let messagesElement = props.dialogsPage.messages.map(message => <Message key={message.id} message={message.message} id={message.id}/>)


    const addNewMessage = () => {
        props.dispatch(addMessageAC())
    }

    const onChangeUpdateNewMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage = e.currentTarget.value
        props.dispatch(updateNewMessageTextAC(newMessage))
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                {messagesElement}
                <textarea value={props.dialogsPage.newMessageText} onChange={onChangeUpdateNewMessageHandler}
                          placeholder={"new message"}></textarea>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    );
};

