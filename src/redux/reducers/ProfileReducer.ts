import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {ProfileDataFormType} from "../../components/Profile/ProfileInfo/ProfileData/ProfileDataForm/ProfileDataForm";
import {AppDispatchType, AppStoreType, AppThunk} from "../redux-store";
import {stopSubmit} from "redux-form";


export type allProfileType = {
    profile: ProfileType
    posts: PostsDataType[]
    status: string
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: ProfilePhotosType
}

export type ProfileContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

export type ProfilePhotosType = {
    small: string | undefined
    large: string | undefined
}

export type PostsDataType = {
    id: string
    message: string
    likesCount: number
}


let initialState: allProfileType = {
    profile: {} as ProfileType,
    posts: [
        {id: v1(), message: "Hello, how are you?", likesCount: 10},
        {id: v1(), message: "It's my first post!", likesCount: 20},
        {id: v1(), message: "It's my first post!", likesCount: 20}

    ],
    status: ""
}

type DeletePostType = ReturnType<typeof deletePost>
type AddPostActionType = ReturnType<typeof addPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
type SetUserStatusType = ReturnType<typeof setUserStatus>
type UpdateStatusType = ReturnType<typeof updateStatus>
type ChangePhotoSuccessType = ReturnType<typeof changePhotoSuccess>
type SaveProfileSuccessType = ReturnType<typeof saveProfileSuccess>
export type ProfileActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | SetUserProfileType
    | SetUserStatusType
    | UpdateStatusType
    | DeletePostType
    | ChangePhotoSuccessType
    | SaveProfileSuccessType


export const profileReducer = (state = initialState, action: ProfileActionsType): allProfileType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostsDataType = {
                id: v1(),
                message: action.postText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case "DELETE-POST": {
            return {...state, posts: state.posts.filter(el => el.id !== action.id)}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET-USER-STATUS": {
            return {...state, status: action.payload.status}
        }
        case "UPDATE-STATUS": {
            return {...state, status: action.payload.status}
        }
        case "CHANGE-PHOTO": {
            return {...state, profile: {...state.profile, photos: action.payload.photos}}
        }
        // case "SAVE-PROFILE": {
        //     return  {...state}
        // }
        default:
            return state
    }
}

export const addPost = (postText: string) => {
    return {
        type: "ADD-POST",
        postText
    } as const
}
export const deletePost = (id: string) => {
    return {
        type: "DELETE-POST",
        id
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        payload: {
            newText: newText
        }
    } as const
}

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: "SET-USER-PROFILE",
        payload: {
            profile: profile
        }
    } as const
}
export const setUserStatus = (status: string) => {
    return {
        type: "SET-USER-STATUS",
        payload: {
            status: status
        }
    } as const
}


export const updateStatus = (status: string) => {
    return {
        type: "UPDATE-STATUS",
        payload: {
            status: status
        }
    } as const
}

export const changePhotoSuccess = (photos: ProfilePhotosType) => {
    return {
        type: "CHANGE-PHOTO",
        payload: {
            photos
        }
    } as const
}

export const saveProfileSuccess = (formData: ProfileDataFormType) => {
    return {
        type: "SAVE-PROFILE",
        payload: {
            formData
        }
    } as const
}
export const getUserProfile = (userId: number) =>  (dispatch: Dispatch) => {
  profileAPI.getUser(userId)
      .then((res) => dispatch(setUserProfile(res)))

}

export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    const res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res))
}

export const updateUserStatus = (status: string) => async (dispatch: Dispatch) => {
    const res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) dispatch(updateStatus(status))
}

export const changePhoto = (file: File) => async (dispatch: Dispatch) => {
    const res = await profileAPI.changePhoto(file)
    if (res.data.resultCode === 0) {
        dispatch(changePhotoSuccess(res.data.data.photos))
    }
}
export const saveProfileTC = (formData: ProfileDataFormType) => async (dispatch: AppDispatchType, getState: () => AppStoreType) => {

    const res = await profileAPI.saveProfile(formData)

    if (res.data.resultCode === 0) {
        const userId = getState().auth.id
        if(userId) {
           dispatch(getUserProfile(userId))
            return Promise.resolve()
        }
    } else {
        dispatch(stopSubmit('editProfile', {_error: res.data.messages[0]})) // спарсить объект и сделать выдачу ошибки для кажлого инпута
            return Promise.reject(res.data.messages[0])
        // {'contacts': {'socialName': res.data.messages[0]}
    }
    return Promise.resolve()
}