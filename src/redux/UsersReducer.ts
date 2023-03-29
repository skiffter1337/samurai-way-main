import {v1} from "uuid";

export type UsersType = {
    users: UserType[]
}

export type UserType = {
    id: string
    photoUrl: string
    fullName: string
    status: string
    isFriend: boolean
    location: {
        city: string
        country: string
    }
}


let initialState: UsersType = {
    users: [
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Ilia", status: "retarded one", isFriend: false, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Anton", status: "retarded two", isFriend: false, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Danil", status: "retarded", isFriend: true, location: {city: "Ivanovo", country: "Russia"}},
        {id: v1(), photoUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/a50b3767-142f-4852-a793-01dcdce1b068/3840x", fullName: "Petya", status: "retarded one", isFriend: true, location: {city: "Ivanovo", country: "Russia"}},
    ] as UserType[]
}

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, isFriend: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, isFriend: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.payload.users]}
        }
        default: return state
    }
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (userId: string) => {
    return {
        type: "FOLLOW",
        payload: {
            userId
        }
    } as const
}



type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (userId: string) => {
    return {
        type: "UNFOLLOW",
        payload: {
            userId
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            users
        }
    } as const
}