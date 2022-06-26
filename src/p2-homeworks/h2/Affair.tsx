import React from 'react'
import s from './Affair.module.css'
import {AffairItemsType, AffairPriorityType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairItemsType // need to fix any
    deleteAffairCallback: (_id: number)=>void// need to fix any
}

const renderDifferentPriority = (priority: AffairPriorityType) => {
    if (priority === 'high') {
        return <span className={`${s.task_priority} ${s.high_p}`}>{priority}</span>
    }
    if (priority === 'middle') {
        return <span className={`${s.task_priority} ${s.middle_p}`}>{priority}</span>
    }
    if (priority === 'low') {
        return <span className={`${s.task_priority} ${s.low_p}`}>{priority}</span>
    }
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }
    return (
        <div className={s.container}>
            <button onClick={()=> deleteCallback(props.affair._id)} className={s.task_item_del_btn}>X</button>
            <span className={s.task_item}>
                {props.affair.name}
            </span>
            {/*<span className={s.task_priority}>*/}
            {/*    {props.affair.priority}*/}
            {/*</span>*/}
            {renderDifferentPriority(props.affair.priority)}
        </div>
    )
}

export default Affair
