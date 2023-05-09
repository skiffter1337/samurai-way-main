import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
                    component="input"
                    placeholder={"login"}
                    required/>
            </div>
            <div>
                <Field
                    name={"password"}
                    component="input"
                    type={"password"}
                    placeholder={"password"}
                    required/>
            </div>
            <div>
                <Field
                    name={"remember"}
                    type={"checkbox"}
                    component="input"/>
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
