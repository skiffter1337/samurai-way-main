import React from 'react';
import {addMessageAC, updateNewMessageTextAC} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {
    AddMessageActionType,
    AddPostActionType,
    StateType,
    UpdateNewMessageTextActionType,
    UpdateNewPostTextActionType
} from "../../redux/store";




let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: AddPostActionType | UpdateNewPostTextActionType | AddMessageActionType | UpdateNewMessageTextActionType) => void) => {
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
