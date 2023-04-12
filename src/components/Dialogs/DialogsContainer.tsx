import React from 'react';
import {addMessageAC, DialogsActionsType, updateNewMessageTextAC} from "../../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";




let mapStateToProps = (state: AppStoreType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: DialogsActionsType) => void) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        updateNewMessage: (newMessage: string) => {
            dispatch(updateNewMessageTextAC(newMessage))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
