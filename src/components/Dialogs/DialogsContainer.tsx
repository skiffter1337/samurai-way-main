import React from 'react';
import {StoreType} from "../../redux/store";
import {addMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

export type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState()

    const onClickAddNewMessage = () => props.store.dispatch(addMessageAC())

    const onChangeUpdateNewMessage = (newMessage: string) => props.store.dispatch(updateNewMessageTextAC(newMessage))

    return <Dialogs dialogsPage={state.dialogsPage} addMessage={onClickAddNewMessage}
                    updateNewMessage={onChangeUpdateNewMessage}/>
};

