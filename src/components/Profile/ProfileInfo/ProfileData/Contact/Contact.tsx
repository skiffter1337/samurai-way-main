import React from 'react';
import {ProfileContactsType} from "../../../../../redux/reducers/ProfileReducer";

type PropsType = {
    contacts: ProfileContactsType
}
export const Contact: React.FC<PropsType> = ({contacts}) => {

    const mappedContacts = Object.keys(contacts).map((contact, index) => {
        return (
            <li key={index}>{`${contact[0].toUpperCase()}${contact.slice(1)}`}: {Object.values(contacts)[index]}</li>
        )
    })
    return (
        <div>
            <b>Contacts</b>
            <ul>
                {mappedContacts}
            </ul>
        </div>
    );
};
