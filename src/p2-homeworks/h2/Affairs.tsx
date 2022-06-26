import React from 'react'
import s from './Affairs.module.css'
import Affair from './Affair'
import {AffairItemsType, AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: AffairType
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.map((a: AffairItemsType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilter = (filter: FilterType) => {
        props.setFilter(filter)
    }

    return (
        <div>

            {mappedAffairs}

            <button onClick={()=>setFilter('all')} className={s.buttons}>All</button>
            <button onClick={()=>setFilter('high')} className={s.buttons}>High</button>
            <button onClick={()=>setFilter('middle')} className={s.buttons}>Middle</button>
            <button onClick={()=>setFilter('low')} className={s.buttons}>Low</button>
        </div>
    )
}

export default Affairs
