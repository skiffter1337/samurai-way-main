

export type UsersType = {
    items:      UserType[];
    totalCount: number;
    error:      null;
}

export type UserType = {
    name:          string;
    id:            number;
    uniqueUrlName: null;
    photos:        PhotosType;
    status:        null;
    followed:      boolean;
}

export type PhotosType = {
    small: null;
    large: null;
}



let initialState: UsersType = {
    items: [

    ] as UserType[],
    totalCount: 23567,
    error: null
}

export const usersReducer = (state: UsersType = initialState, action: ActionType): UsersType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.payload.id? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, items: [...state.items, ...action.payload.items]}
        }
        default: return state
    }
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType

type FollowACType = ReturnType<typeof followAC>

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        payload: {
            id
        }
    } as const
}



type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            id
        }
    } as const
}

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (items: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            items
        }
    } as const
}