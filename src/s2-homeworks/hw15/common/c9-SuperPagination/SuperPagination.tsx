import React, { ChangeEvent, useState } from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination, SelectChangeEvent } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(+(totalCount / itemsCountForPage)) 

    const [optionValue, setOptionValue] = useState(itemsCountForPage)

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
        onChange(page, optionValue)
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = +event?.currentTarget.value
        setOptionValue(value)
        onChange(1, value)
    }


    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    '& .MuiPaginationItem-page': {
                        fontSize: '14px',
                        fontFamily: 'Roboto',
                        fontWeight: '400',
                        color: 'rgba(13, 11, 12, 1)',
                        padding: '4px 8px',
                        '&:hover': {
                            backgroundColor: '#cccccca2',
                        },
                    },
                    '& .MuiPaginationItem-page.Mui-selected': {
                        backgroundColor: 'rgba(0, 102, 204, 1)',
                        color: 'rgba(255, 255, 255, 1)',
                        '&:hover': {
                            backgroundColor: '#0055aa',
                        },
                    },
                }}
                shape="rounded"
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                Показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                className={s.select}
                value={itemsCountForPage}
                options={[
                    { id: 4, value: 4 },
                    { id: 7, value: 7 },
                    { id: 10, value: 10 },
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
