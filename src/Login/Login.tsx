import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsComtrols/FormsControls";
import {required} from "../utils/validators";
import {connect} from "react-redux";
import {loginTC} from "../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../redux/redux-store";


type FormDataType = {
    email: string
    password: string
    remember: boolean
}
type LoginType = {
loginTC: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}

 const Login = (props: LoginType): JSX.Element => {


    const onSubmit = (formData: FormDataType) => {
        props.loginTC(formData.email, formData.password, formData.remember)
    }


    if(props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <h2>Login</h2>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    );
};
const mapStateToProps = (state: AppStoreType) => ({isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {loginTC}) (Login);
export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={"email"}
                    type={"email"}
                    component={Input}
                    placeholder={"email"}
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
