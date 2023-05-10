import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {authAPI} from "../api/api";
import {Input} from "../components/common/FormsComtrols/FormsControls";
import {required} from "../utils/validators";

type FormDataType = {
    login: string
    password: string
    remember: boolean
}


export const Login = (): JSX.Element => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div className={s.login}>
            <h2>Login</h2>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"login"}
                    type={"email"}
                    component={Input}
                    placeholder={"login"}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    name={"password"}
                    type={"password"}
                    component={Input}
                    placeholder={"password"}
                    validate={[required]}
                    />
            </div>
            <div>
                <Field
                    name={"remember"}
                    type={"checkbox"}
                    component={Input}
                />
                remember me
            </div>
            <div>
                <button>submit</button>
            </div>

        </form>
    );
};

const ReduxLoginForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
