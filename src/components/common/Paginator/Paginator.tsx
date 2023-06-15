import React, {useState} from 'react';

import s from './Paginator.module.css';


type PaginatorType = {
    totalItemsCount: number
    currentPage: number
    portionSize: number
    changeCurrentPage: (page: number) => void
}


export const Paginator: React.FC<PaginatorType> = ({totalItemsCount, portionSize = 10, currentPage, changeCurrentPage}) => {

    const portionCount = Math.ceil(totalItemsCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionNumber = portionNumber * portionSize

    const pages = []
    for (let i = 1; i <= portionCount; i++) {
        pages.push(i)
    }

    return (
        <>
            {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button> }
            {pages.filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                return (
                    <span key={p} className={p === currentPage ? s.selected_page : ""}
                          onClick={() => changeCurrentPage(p)}>{` ${p} `}</span>
                )
            })}
            {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button> }
        </>
    )
};

