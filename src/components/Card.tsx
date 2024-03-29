import { useState } from 'react'

import './Card.css'


const Card : React.FC = () => {
    const [view, setView] = useState<'login' | 'register'>('login')

    return (
        <>
            {view == 'login' && <Login onRegisterClick={() => setView('register')}/>}
            {view == 'register' && <Register onBackClick={() => setView('login')}/>} 
        </>
    )
}

interface LoginProps {
    onRegisterClick: () => void;
}

interface RegisterProps {
    onBackClick: () => void;
}

const Login : React.FC<LoginProps> = ({ onRegisterClick }) => {

    return (
        <>

        <div>

            <div className="flex-container">
                <p>
                    Welcome to FishLogger!
                </p>
                <p>
                    Please login with an existing account or register a new account.
                </p>
                <label className="user-input">
                    Username: <input />
                </label>
                <label>
                    Password: <input />
                </label>
            </div>

            <button className="bot-button">
                Login
            </button>
            <button className="bot-button" onClick={onRegisterClick}>
                Register
            </button>
        </div>

        </>
    )
}

const Register : React.FC<RegisterProps> = ({ onBackClick }) => {

    return (
        <>

        <div>

            <div className="flex-container">
                <p>
                    Please register below with a username, email address and password.
                </p>
                <label className="user-input">
                    Username: <input />
                </label>
                <label>
                    Email Address: <input />
                </label>
                <label>
                    Password: <input />
                </label>
                <label>
                    Confirm Password: <input />
                </label>
            </div>

            <button className="bot-button">
                Sign Up
            </button>
            <button className="bot-button" onClick={onBackClick}>
                Back to Home
            </button>
        </div>

        </>
    )
}


export default Card