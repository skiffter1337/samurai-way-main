import React from 'react';
import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";


type DialogItem = {
    name: string
    id: string
}

export const DialogItem = (props: DialogItem) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={(isActive) => isActive ? s.active : s.dialog}> {props.name} </NavLink>
        </div>
    )
}
