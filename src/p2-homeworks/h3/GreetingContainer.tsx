import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {v1} from "uuid";
import {userArrayType} from "./HW3";

type GreetingContainerPropsType = {
    users: userArrayType
    addUserCallback: (id: string, name: string) => void
}

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            alert(`Hello  ${name}!`)
            addUserCallback(v1(), name)
        }
        else {
            setError('Incorrect characters')
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
