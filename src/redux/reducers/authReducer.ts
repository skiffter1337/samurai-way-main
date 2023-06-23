import {authAPI, securityAPI} from "../../api/api";
import {Dispatch} from "redux";
import {AppDispatchType} from "../redux-store";
import {stopSubmit} from "redux-form";
import {boolean} from "yup";

export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
}

type InitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    isFetching: boolean
    captchaURL: string | null
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false,
    captchaURL: null,
}


type SetUserAuthDataType = ReturnType<typeof setUserAuthData>
type SetCaptchaType = ReturnType<typeof setCaptcha>
export type AuthActionsType = SetUserAuthDataType | SetCaptchaType

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "auth/SET-USER-AUTH-DATA":
            return {...state, ...action.data, isAuth: action.isAuth}
        case  "auth/SET-CAPTCHA":
            return {...state, captchaURL: action.captchaURL}
        default:
            return state
    }
}

export const setUserAuthData = (data: UserDataType, isAuth: boolean) => ({
    type: "auth/SET-USER-AUTH-DATA",
    data,
    isAuth
} as const)

export const setCaptcha = (captchaURL: string) => {
    return {
        type: "auth/SET-CAPTCHA",
        captchaURL
    } as const
}

export const getUserAuthDataTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()
    if (res.resultCode === 0) dispatch(setUserAuthData(res.data, true))
}


export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: AppDispatchType) => {
    const res = await authAPI.login(email, password, rememberMe, captcha)
    if (res.data.resultCode === 0) {
        dispatch(getUserAuthDataTC())
    } else {
        if(res.data.resultCode === 10) {
            dispatch(getCaptchaURL())
        }
        let message = res.data.messages.length ? res.data.messages[0] : "Some error"
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const getCaptchaURL = () => async (dispatch: AppDispatchType) => {
    const res = await securityAPI.getCaptcha()
    dispatch(setCaptcha(res.data.url))
}
export const logoutTC = () => async (dispatch: AppDispatchType) => {
    const res = await authAPI.logout()
    if (res.data.resultCode === 0) {
        dispatch(setUserAuthData({id: null, email: null, login: null}, false))
    }
}