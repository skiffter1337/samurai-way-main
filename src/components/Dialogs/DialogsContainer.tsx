import React from 'react';
import {
    addMessageAC,
    DialogsActionsType,
    DialogsPageType,
    updateNewMessageTextAC
} from "../../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessage: (newMessage: string) => void
}

let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: DialogsActionsType) => void): MapDispatchToPropsType => {
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
