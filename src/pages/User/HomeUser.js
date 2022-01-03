import React from 'react'
import { useSelector } from 'react-redux'

function HomeUser() {

    const { persons } = useSelector(state => state.persons)
    console.log(persons)
    return (
        <div>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
            <h1>home user</h1>
        </div>
    )
}

export default HomeUser
