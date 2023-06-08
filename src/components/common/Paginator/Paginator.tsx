import React from 'react';

import s from './Paginator.module.css';



type PaginatorType = {
    totalCount: number
    currentPage: number
    pageSize: number
    changeCurrentPage: (page: number) => void
}


export const Paginator: React.FC<PaginatorType> = ({totalCount, pageSize, currentPage, changeCurrentPage}) => {

    const pagesCount = Math.ceil(totalCount / pageSize / 100)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {pages.map((p, index) => {
                return (
                    <span key={index} className={p === currentPage ? s.selected_page : ""}
                          onClick={() => changeCurrentPage(p)}>{` ${p} `}</span>
                )
            })}
        </>
    )
};

