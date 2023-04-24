import React, {Component} from 'react';

type ProfileStatusType = {
    status: string
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    }

    changeEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        console.log(this.state.editMode)
        return (
            <div>
                {!this.state.editMode
                    ?
                    <div>
                        <span onDoubleClick={this.changeEditMode}>{this.props.status}</span>
                    </div>
                    :
                    <div>
                        <input value={this.props.status} onBlur={this.changeEditMode} autoFocus/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;