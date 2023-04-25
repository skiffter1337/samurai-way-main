import React, {ChangeEvent, Component} from 'react';

type ProfileStatusType = {
    status: string
    updateUserStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state: StateType = {
        editMode: false,
        status: this.props.status
    }


    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    </div>
                    :
                    <div>
                        <input value={this.state.status} onBlur={this.deactivateEditMode} onChange={this.onStatusChange}
                               autoFocus/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;