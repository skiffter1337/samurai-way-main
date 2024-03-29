import {AppStoreType} from "../redux-store";
import {createSelector} from "reselect";

export const getUsersFromState = (state: AppStoreType) => state.usersPage.pageSize
export const getUsersSelector = createSelector(getUsersFromState, users => users)

export const getPageSizeFromState = (state: AppStoreType) => state.usersPage.items
export const getTotalCountFromState = (state: AppStoreType) => state.usersPage.totalCount
export const getCurrentPageFromState = (state: AppStoreType) => state.usersPage.currentPage
export const getIsFetchingFromState = (state: AppStoreType) => state.usersPage.isFetching
export const getFollowingInProgressFromState = (state: AppStoreType) =>state.usersPage.followingInProgress
