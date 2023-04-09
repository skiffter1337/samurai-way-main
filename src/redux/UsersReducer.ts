

export type UsersType = {
    items:      UserType[];
    // totalCount: number;
    // error:      null;
}

export type UserType = {
    name:          string;
    id:            number;
    // uniqueUrlName: null;
    photos:        PhotosType;
    status:        null;
    followed:      boolean;
}

export type PhotosType = {
    small: null;
    large: null;
}

type InitialStateType = typeof initialState

let initialState = {
    items: [] as UserType[],
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
    // error: null
}

console.log(initialState.currentPage)
export const usersReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.payload.id? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, items: state.items.map(u => u.id === action.payload.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, items: [...action.payload.items, ...state.items, ]}
        }
        case "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return  {...state, isFetching: action.payload.isFetching}
        }
        default: return state
    }
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType | ChangeCurrentPageACType | SetTotalUsersCountACType | ToggleIsFetchingACType

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

type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPageAC>
export const changeCurrentPageAC = (page: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            page
        }
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {
            totalCount
        }
    } as const
}
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetchingAC>
export const toggleIsFetchingAC = (flag: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching: flag
        }
    } as const
}