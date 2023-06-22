import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {CheckBox, Input, TextArea} from "../../../../common/FormsComtrols/FormsControls";
import {ProfileType} from "../../../../../redux/reducers/ProfileReducer";
import s from "../../../../../Login/Login.module.css";


type PropsType = {
    deactivateEditMode: () => void
    profile: ProfileType
}

export type ProfileDataFormType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

const ProfileDataForm: React.ComponentType<InjectedFormProps<ProfileDataFormType, PropsType> & PropsType> =
    ({
         handleSubmit, deactivateEditMode, profile, error
     }) => {


        return (
            <>
                <button onClick={deactivateEditMode}>X</button>
                <form onSubmit={handleSubmit}>
                    <div>
                        <b>Full name</b>:
                        <Field name={"fullName"}
                               component={Input}
                               placeholder={"Full name"}
                        />
                    </div>
                    <div>
                        <b>Looking for a job</b>:
                        <Field name={'lookingForAJob'} component={CheckBox}/>
                    </div>
                    <div>
                        <b>My professional skills</b>:
                        <Field name={'lookingForAJobDescription'} component={TextArea}
                               placeholder={"My professional skills"} initial/>
                    </div>
                    <div>
                        <b>About me</b>:
                        <Field name={'aboutMe'} component={TextArea} placeholder={"About me"}/>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <b>Contacts</b>:
                        <br/>
                        <br/>
                        {Object.keys(profile.contacts).map((key, index) => {
                        return <div key={index}>
                              <b>{key}</b>: <Field name={`contacts.${key}`} component={Input} placeholder={key}/>
                        </div>
                    })}
                    </div>
                    <div className={s.summary_error}>
                        {error}
                    </div>
                    <button>Save</button>
                </form>

            </>
        )
    }

export const ReduxProfileForm = reduxForm<ProfileDataFormType, PropsType>({
    form: 'editProfile',

})(ProfileDataForm)
