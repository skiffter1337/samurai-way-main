import React from 'react';
import {UserType} from "../../redux/reducers/UsersReducer";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User";


type UsersType = {
    totalItemsCount: number
    currentPage: number
    usersPage: UserType[]
    pageSize: number
    followingInProgress: number[]

    changeCurrentPage: (page: number) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
    followTC: (userId: number) => void
    unfollowTC: (userId: number) => void
}


export const Users: React.FC<UsersType> =
    ({
         followingInProgress,
         currentPage,
         changeCurrentPage,
         usersPage,
         pageSize,
         totalItemsCount,
         followTC,
         unfollowTC,
         unfollow,
         follow
     }) => {

        return (
            <>
                <Paginator currentPage={currentPage} changeCurrentPage={changeCurrentPage} totalItemsCount={totalItemsCount}
                           portionSize={pageSize}/>
                {
                    usersPage.map(user =>
                        <User
                            userId={user.id}
                            name={user.name}
                            status={user.status}
                            photos={user.photos}
                            key={user.id}
                            followed={user.followed}
                            followingInProgress={followingInProgress}
                            follow={follow}
                            unfollow={unfollow}
                            followTC={followTC}
                            unfollowTC={unfollowTC}/>)
                }
            </>
        )
    };

