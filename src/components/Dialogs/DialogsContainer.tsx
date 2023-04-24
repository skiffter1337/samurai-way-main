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
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessage: () => void
    updateNewMessage: (newMessage: string) => void
}

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType



let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
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

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
