import { useState } from 'react'
import Login from './Login.tsx'
import Register from './Register.tsx'

function Card() {
    const [view, setView] = useState<'login' | 'register'>('login')
    let content;

    // Need to find better design to be able to swap between login and register
    // Currently, difficult to access view through Login and Register
    if (view == 'login') {
        content = <Login />
    } else if (view == 'register') {
        content = <Register />
    }

    return (
        <>
            {content}
        </>
    )
}

export default Card