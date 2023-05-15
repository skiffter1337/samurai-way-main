import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { connect } from "http2";
import {loginTC, logoutTC} from "../../redux/reducers/authReducer";

type HeaderType = {
    logoutTC: () => void
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {

    const logoutHandler = () => props.logoutTC()

    return (
        <header className={s.header}>
            <div className={s.headerBlock}>
                <img src="eggplant.png"/>
                <div className={s.loginBlock}>
                    {props.isAuth
                            ? <NavLink to={"/profile"}>{props.login} <button onClick={logoutHandler}>Logout</button></NavLink>
                            : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header