import {AppDispatchType} from "../redux-store";
import {getUserAuthDataTC} from "./authReducer";


type InitialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState , action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case "SET-INITIALIZED":
            return {...state, initialized: true}
        default:
            return state
    }
}

export type AppReducerActionsType = ReturnType<typeof setIntializedAC>

const setIntializedAC = () => ({type: "SET-INITIALIZED" } as const )



export const initializeAppTC =  () => (dispatch: AppDispatchType) => {
   dispatch(getUserAuthDataTC())
       .then(() => {
           dispatch(setIntializedAC())
       })


}