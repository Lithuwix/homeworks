import React, {useState} from 'react'
import s from './HW2.module.css'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'// fixed any
export type AffairType = Array<AffairItemsType> // fixed any
export type FilterType = 'all' | AffairPriorityType

export type AffairItemsType = { // I made this type and use in Affairs-component
    _id: number
    name: string
    priority: AffairPriorityType
}

// constants
const defaultAffairs: AffairType = [ // fixed any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'}
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: FilterType): any => { // need to fix any
    if (filter === 'all') return affairs
    else return affairs.filter(a => a.priority === filter)
}
export const deleteAffair = (affairs: AffairType, _id: number): any => { // need to fix any
    return affairs.filter(a => a._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType>(defaultAffairs) // fixed any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // fixed any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <div className={s.main_container}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>
        </div>
    )
}

export default HW2
