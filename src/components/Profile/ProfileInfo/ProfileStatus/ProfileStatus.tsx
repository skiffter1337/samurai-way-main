import React, {ChangeEvent, useEffect, useState} from 'react';


type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}
export const ProfileStatus = (props: ProfileStatusType) => {


    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(() => setStatus(props.status), [props.status])

    const activateEditMode = () => setEditMode(true)

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status)
    }

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => setStatus(e.currentTarget.value)


    return (
        <div>
            {!editMode
                ?
                <div>
                    <span onDoubleClick={activateEditMode}>{status || "No status"}</span>
                </div>
                :
                <div>
                    <input value={status} onBlur={deactivateEditMode} onChange={inputHandler}
                           autoFocus/>
                </div>
            }
        </div>
    );
};

