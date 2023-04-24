import React, {ChangeEvent, useState} from 'react';
import {KeyboardEvent} from "react";

type EditableSpanType = {
    oldTitle: string
}
export const EditableSpan = (props: EditableSpanType) => {

    const [newTitle, setNewTitle] = useState(props.oldTitle)
    const [editMode, setEditMode] = useState(false)

    const ChangeEditMode = () => setEditMode(!editMode)
    const ChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setNewTitle(e.currentTarget.value)

    const AddTitle = (e: KeyboardEvent<HTMLInputElement>) => {
if(e.key === "Enter") {
    setEditMode(false)
}
    }

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={ChangeEditMode}>{newTitle}</span>
                : <input value={newTitle} onChange={ChangeTitle} onKeyPress={AddTitle} onBlur={ChangeEditMode} autoFocus/>
            }
        </div>
    );
};
