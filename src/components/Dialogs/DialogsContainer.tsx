import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";



export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                let state = store.getState()
                const onClickAddNewMessage = () => store.dispatch(addMessageAC())
                const onChangeUpdateNewMessage = (newMessage: string) => store.dispatch(updateNewMessageTextAC(newMessage))

                return ( <Dialogs
                    dialogsPage={state.dialogsPage}
                    addMessage={onClickAddNewMessage}
                    updateNewMessage={onChangeUpdateNewMessage}
                /> )
            }
            }
        </StoreContext.Consumer>
    )
};

