import {authAPI} from "../../api/api";
import {Dispatch} from "redux";
import {AppDispatchType} from "../redux-store";
import {stopSubmit} from "redux-form";

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
}

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isFetching: false
}


type SetUserAuthDataType = ReturnType<typeof setUserAuthData>
export type AuthActionsType = SetUserAuthDataType

export const authReducer = (state: InitialStateType = initialState, action: AuthActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-USER-AUTH-DATA":

            return {...state, ...action.data, isAuth: action.isAuth}
        default:
            return state
    }
}


export const setUserAuthData = (data: UserDataType, isAuth: boolean) => ({type: "SET-USER-AUTH-DATA", data, isAuth} as const)



export const getUserAuthDataTC = () => (dispatch: Dispatch) => {
   return authAPI.me()
        .then(data => {
            if (data.resultCode === 0) dispatch(setUserAuthData(data.data, true))
        })
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then((res) => {
            if (res.data.resultCode === 0) {
              dispatch(getUserAuthDataTC())
            } else {
                let message = res.data.messages.length ? res.data.messages[0] : "Some error"
                dispatch(stopSubmit('login', {_error: message}))
            }
        })
        .catch(e => {
            console.log(e.message)
            console.log(e.resultCode)
        })

}
export const logoutTC = () => (dispatch: AppDispatchType) => {
    authAPI.logout()
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(setUserAuthData({id: null, email: null, login: null}, false))
            }
        })

}