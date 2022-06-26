import React from 'react'
import css from "./Message.module.css"

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export function Message(props : MessagePropsType) {
    return (
        <div className={css.message}>
            <div className={css.ava_container}>
                <img src={props.avatar} alt="ava" className={css.ava_img}/>
            </div>
            <div className={css.message_body}>
                <div>
                    <div className={css.name}>{props.name}</div>
                    <div className={css.message_text}>{props.message}</div>
                </div>
                <div className={css.message_time_container}>
                    <div className={css.message_time}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}