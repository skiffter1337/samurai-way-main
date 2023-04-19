import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderType) => {
    return (
        <header className={s.header}>
            <div className={s.headerBlock}>
                <img src="eggplant.png"/>
                <div className={s.loginBlock}>
                    {props.isAuth
                            ? <NavLink to={"/profile"}>{props.login}</NavLink>
                            : <NavLink to={"/login"}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;