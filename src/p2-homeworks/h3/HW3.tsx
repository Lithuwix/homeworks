import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from "uuid";

export type userArrayType = Array<UserType>

export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {

    const [users, setUsers] = useState<userArrayType>([])

    const addUserCallback = (id: string, name: string) => {
        const newUser = {_id: v1(), name: name}
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>
            <hr/>
        </div>
    )
}

export default HW3
