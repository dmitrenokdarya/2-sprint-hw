import React from 'react'
import noneIconPng from './Frame 1.png'
import downIconPng from './Polygon 5.png'
import upIconPng from './Polygon 2.png'
import s from '../../HW15.module.css'

const downIcon = downIconPng
const upIcon = upIconPng
const noneIcon = noneIconPng


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) { return up }
    else if (sort === up) { return '' }
    else { return down }
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.imgUpSpan}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                className={s.imgUp}
            />
        </span>
    )
}

export default SuperSort
