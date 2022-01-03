import React from 'react'
import Login from '../../components/Auth/Login'
import Animate from '../../settings/Animate'

export default function LoginPage() {
    return (
        <>
            <Animate anima='fadeInUp'>
                <Login />
            </Animate>
        </>
    )
}

