import React from 'react';
import s from "../Dialogs.module.css";

type MessageType = {
    message: string
    id: string
}

export const Message = (props: MessageType) => {
    return (
        <div className={s.dialogsMessage}>
            {props.message}
        </div>
    )
}
