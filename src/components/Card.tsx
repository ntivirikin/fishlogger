import { useState } from 'react'

import './Card.css'

interface CardProps {
    onLoginClick: () => void;
}

const Card : React.FC<CardProps> = ( {onLoginClick} ) => {
    const [view, setView] = useState<'login' | 'register'>('login')

    return (
        <>
            {view == 'login' && <Login onLoginClick={onLoginClick} onRegisterClick={() => setView('register')}/>}
            {view == 'register' && <Register onBackClick={() => setView('login')}/>} 
        </>
    )
}

interface LoginProps {
    onRegisterClick: () => void;
    onLoginClick: () => void;
}

interface RegisterProps {
    onBackClick: () => void;
}

const Login : React.FC<LoginProps> = ({ onRegisterClick, onLoginClick }) => {

    return (
        <>

        <div className="flex-container">
            <p>
                Welcome to FishLogger!
                Please login with an existing account or register a new account.
            </p>

            <span>Username:</span>
            <input />
            <span>Password:</span>
            <input type="password"/>
        </div>

        <div className="button-box">
            <button onClick={onLoginClick}>
                Login
            </button>
            <button onClick={onRegisterClick}>
                Register
            </button>
        </div>

        </>
    )
}

const Register : React.FC<RegisterProps> = ({ onBackClick }) => {

    return (
        <>

        <div className="flex-container">
            <p>
                Please register below with a username, email address and password.
            </p>

            <span>Username:</span>
            <input />
            <span>Email Address:</span>
            <input />
            <span>Password:</span>
            <input type="password"/>
            <span>Confirm Password:</span>
            <input type="password"/>
        </div>
        
        <div className="button-box">
            <button>
                Sign Up
            </button>
            <button onClick={onBackClick}>
                Back to Home
            </button>
        </div>

        </>
    )
}

export default Card
