import React from 'react';
import s from './Login.module.css'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../components/common/FormsComtrols/FormsControls";
import {required} from "../utils/validators";
import {connect} from "react-redux";
import {loginTC} from "../redux/reducers/authReducer";
import {Redirect} from "react-router-dom";
import {AppStoreType} from "../redux/redux-store";


type LoginFormDataType = {
    email: string
    password: string
    remember: boolean
    captcha: string
}
type LoginType = {
    loginTC: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    captchaURL: string | null
}

const Login = (props: LoginType): JSX.Element => {


    const onSubmit = (formData: LoginFormDataType) => {
        props.loginTC(formData.email, formData.password, formData.remember, formData.captcha)
    }

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={s.login}>
            <h2>Login</h2>
            <ReduxLoginForm onSubmit={onSubmit} captchaURL={props.captchaURL}/>
        </div>
    );
};
const mapStateToProps = (state: AppStoreType) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, {loginTC})(Login);


type PropsType = {
    captchaURL: string | null
}

export const LoginForm: React.ComponentType<InjectedFormProps<LoginFormDataType, PropsType> & PropsType> =
    ({handleSubmit, error, captchaURL}) => {


        return (
            <form onSubmit={handleSubmit}>
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
                <div className={s.summary_error}>
                    {error}
                </div>
                {captchaURL &&
                    <div>
                        <div>
                            <img src={captchaURL}/>
                        </div>

                        <div>
                            <Field
                                name={"captcha"}
                                placeholder={"captcha"}
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                    </div>
                }
                <div>
                    <button>submit</button>
                </div>

            </form>
        );
    };

export const ReduxLoginForm = reduxForm<LoginFormDataType, PropsType>({
    form: 'login'
})(LoginForm)
