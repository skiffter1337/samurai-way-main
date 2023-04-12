
export type UserDataType = {
    id: number | null
    login: string | null
    email: string | null
}

type initialStateType = {
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
type AuthActionsType = SetUserAuthDataType
export const authReducer = (state: initialStateType = initialState, action: AuthActionsType): initialStateType => {
    switch (action.type) {
        case "SET-USER-AUTH-DATA": {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }
}


export const setUserAuthData = (data: UserDataType) => {
    return {
        type: "SET-USER-AUTH-DATA",
        data

    } as const
}