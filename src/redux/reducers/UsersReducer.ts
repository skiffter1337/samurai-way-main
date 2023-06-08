import {userAPI} from "../../api/api";
import {Dispatch} from 'redux';
import {updateObjectsInArray} from "../../utils/objects-helpers";

export type UsersType = {
    items: UserType[];
    // totalCount: number;
    // error:      null;
}

export type UserType = {
    name: string;
    id: number;
    // uniqueUrlName: null;
    photos: PhotosType;
    status: null | string;
    followed: boolean;
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
    isFetching: false,
    followingInProgress: [0]
    // error: null
}


export const usersReducer = (state: InitialStateType = initialState, action: UsersActionType): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, items: updateObjectsInArray(state.items, action.payload.id, "id", {followed: true})}
        }
        case "UNFOLLOW": {
            return {...state, items: updateObjectsInArray(state.items, action.payload.id, "id", {followed: false})}
        }
        case "SET-USERS": {
            return {...state, items: [...action.payload.items]}
        }
        case "CHANGE-CURRENT-PAGE": {
            return {...state, currentPage: action.payload.page}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalCount: action.payload.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.payload.isFetching}
        }
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ? [...state.followingInProgress, action.payload.id] :
                    state.followingInProgress.filter(id => id !== action.payload.id)
            }
        }
        default:
            return state
    }
}

export type UsersActionType = FollowACType
    | UnfollowACType |
    SetUsersACType |
    ChangeCurrentPageACType |
    SetTotalUsersCountACType |
    ToggleIsFetchingACType |
    ToggleFollowingProgressType

type FollowACType = ReturnType<typeof follow>
export const follow = (id: number) => {
    return {
        type: "FOLLOW",
        payload: {
            id
        }
    } as const
}
type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => {
    return {
        type: "UNFOLLOW",
        payload: {
            id
        }
    } as const
}
type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (items: UserType[]) => {
    return {
        type: "SET-USERS",
        payload: {
            items
        }
    } as const
}
type ChangeCurrentPageACType = ReturnType<typeof changeCurrentPage>
export const changeCurrentPage = (page: number) => {
    return {
        type: "CHANGE-CURRENT-PAGE",
        payload: {
            page
        }
    } as const
}
type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {
            totalCount
        }
    } as const
}
type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (flag: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching: flag
        }
    } as const
}
type ToggleFollowingProgressType = ReturnType<typeof toggleFollowingProgress>
export const toggleFollowingProgress = (isFetching: boolean, id: number) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        payload: {
            isFetching: isFetching,
            id: id
        }
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const res = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
    dispatch(setTotalUsersCount(res.totalCount))
}

export const changeCurrentPageTC = (page: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(changeCurrentPage(page))
    const res = await userAPI.getUsers(page, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.items))
}
// type ApiMethodType = (userId: number) => Promise<{ resultCode: number }>;
// type ActionCreatorType  = (userId: number) => { type: "FOLLOW", payload: { id: number } }
export const followUnfollowFlowTC = async (userId: number, apiMethod: any , actionCreator: any , dispatch: Dispatch)  => {
    dispatch(toggleFollowingProgress(true, userId))
    const res = await apiMethod(userId)
    if (res.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleFollowingProgress(false, userId))
}
export const followTC = (userId: number) => (dispatch: Dispatch) => {
    followUnfollowFlowTC(userId, userAPI.follow.bind(userAPI), follow, dispatch)
}
export const unfollowTC = (userId: number) => async (dispatch: Dispatch) => {
    followUnfollowFlowTC(userId, userAPI.unFollow.bind(userAPI), unfollow, dispatch)
}