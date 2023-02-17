import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/state";

type NavbarType = {
state: SidebarType
}

export const Navbar = (props: NavbarType) => {
    const fiendsList = props.state.sidebarData.map(friend => {
        return (
            <span>{friend.name + " "}</span>
        )
    })


    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={NavBar => NavBar.isActive ? s.active : s.item}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={NavBar => NavBar.isActive ? s.active : s.item}> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={NavBar => NavBar.isActive ? s.active : s.item}> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={NavBar => NavBar.isActive ? s.active : s.item}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={NavBar => NavBar.isActive ? s.active : s.item}> Settings </NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to="/friends" className={NavBar => NavBar.isActive ? s.active : s.friends}> Friends </NavLink>
                <div className={s.friendsList}>{fiendsList}</div>
            </div>
        </nav>
    )
};

