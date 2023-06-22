import React from "react";

type ContactsPropsType = {
    contactsTitle: string
    contactsValue: string
}
export const Contact = (props: ContactsPropsType) => {
    return (
        <li>{props.contactsTitle}: {props.contactsValue}</li>
    )
}