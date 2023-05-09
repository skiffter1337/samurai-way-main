import React from 'react';
import {
    addMessageAC,
    DialogsActionsType,
    DialogsPageType,
} from "../../redux/reducers/DialogsReducer";
import {Dialogs} from "./Dialogs";

import {connect} from "react-redux";
import {AppStoreType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



type MapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean

}
type MapDispatchToPropsType = {
    addMessage: (message: string) => void

}

type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType



let mapStateToProps = (state: AppStoreType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: (action: DialogsActionsType) => void): MapDispatchToPropsType => {
    return {
        addMessage: (message: string) => {
            dispatch(addMessageAC(message))
        }

    }
}

export default compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)
