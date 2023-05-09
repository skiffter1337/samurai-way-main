import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";


export type allProfileType = {
    profile: ProfileType
    posts: PostsDataType[]
    newPostText: string
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

type ProfileContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
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
    newPostText: "",
    status: ""
}

type AddPostActionType = ReturnType<typeof addPost>
type SetUserProfileType = ReturnType<typeof setUserProfile>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
type SetUserStatusType = ReturnType<typeof setUserStatus>
type UpdateStatusType = ReturnType<typeof updateStatus>
export type ProfileActionsType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileType | SetUserStatusType | UpdateStatusType

export const profileReducer = (state = initialState, action: ProfileActionsType): allProfileType => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: v1(),
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [newPost, ...state.posts], newPostText: ""}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.payload.newText}
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.profile}
        }
        case "SET-USER-STATUS": {
            return  {...state, status: action.payload.status}
        }
        case "UPDATE-STATUS": {
            return  {...state, status: action.payload.status}
        }
        default:
            return state
    }
}

export const addPost = () => {
    return {
        type: "ADD-POST"
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


export const getUserProfile = (userId: string) => {
  return (dispatch: Dispatch) => {
      profileAPI.getUser(userId)
          .then(data => {
              dispatch(setUserProfile(data))
          })
  }
}

export const getUserStatus = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setUserStatus(response))
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.data.resultCode === 0) {
                dispatch(updateStatus(status))
                }
            })
    }
}

