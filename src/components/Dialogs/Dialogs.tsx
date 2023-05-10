import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

import {DialogsPageType} from "../../redux/reducers/DialogsReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Redirect} from "react-router-dom";
import {maxLengthCreator, required} from "../../utils/validators";
import {TextArea} from "../common/FormsComtrols/FormsControls";


export type DialogsPropsType = {
    dialogsPage: DialogsPageType
    addMessage: (message: string)=> void
    isAuth: boolean
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs.map(dialog => {
        return (
            <div className={s.friends} key={dialog.id}>
                <img className={s.img} src="https://cdn.onlinewebfonts.com/svg/img_266351.png"/>
                <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>
            </div>
        )
    })
    let messagesElement = props.dialogsPage.messages.map(message => <Message key={message.id} message={message.message}
                                                                             id={message.id}/>)

    const onClickAddNewMessage = (values: SendMessageFormDataType) => {
        props.addMessage(values.message)
        values.resetForm()

    }


    if(props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.dialogsMessages}>
                <div> {messagesElement} </div>
                <SendMessageReduxForm onSubmit={onClickAddNewMessage}/>
            </div>
        </div>
    );
};

type SendMessageFormDataType = {
    message: string
    resetForm: () => void
}


const maxLength50 = maxLengthCreator(50)
export const SendMessageForm: React.FC<InjectedFormProps<SendMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"message"}
                    component={TextArea}
                    placeholder={"new message"}
                    validate={[maxLength50, required]}
                />
            </div>
            <div>
                <button>send</button>
            </div>
        </form>
    );
};

const SendMessageReduxForm = reduxForm<SendMessageFormDataType>({
    form: 'message'
})(SendMessageForm)
