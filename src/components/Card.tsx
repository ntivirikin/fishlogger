import { useEffect, useState } from 'react'

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

        <div className="flex flex-col items-center space-y-5">
            <p>
                Welcome to FishLogger!
                Please login with an existing account or register a new account.
            </p>
            
            <div className="flex flex-row">
                <span className="mr-2">Username:</span>
                <input className="max-w-80" />
            </div>
            <div className="flex flex-row">
                <span className="mr-2">Password:</span>
                <input className="max-w-80" type="password"/>
            </div>

            <div className="flex flex-row"> 

                <button onClick={onLoginClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md">
                    Login
                </button>
                <button onClick={onRegisterClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md ml-5">
                    Register
                </button>
            </div>
        </div>

    )
}

const Register : React.FC<RegisterProps> = ({ onBackClick }) => {
    function registerUser() {
        console.log("Something!")
    }

    useEffect(() => {

        function handleClick() {
            registerUser();
        }

        const registerButton: HTMLElement | null = document.getElementById("registerButton");

        if (registerButton) {
            registerButton.addEventListener("click", handleClick);
        }

        return () => {
            if (registerButton) {
                registerButton.removeEventListener("click", handleClick);
            }
        }
    });

    return (
        <>

        <div className="flex flex-col place-items-center space-y-3">
            <p>
                Please register below with a username, email address and password.
            </p>

            <div className="flex flex-row">
                <span className="mr-2">Username</span>
                <input name="user"/>
            </div>

            <div className="flex flex-row">
                <span className="mr-2">Email Address</span>
                <input name="email" type="email"/>
            </div>

            <div className="flex flex-row">
                <span className="mr-2">Password</span>
                <input name="password" type="password"/>
            </div>

            <div className="flex flex-row">
                <span className="mr-2">Confirm Password</span>
                <input name="confirm-password" type="password"/>
            </div>
        
            <div className="flex flex-row">
                <button onClick={registerUser} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md">
                    Sign Up
                </button>
                <button id="registerButton" onClick={onBackClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md ml-5">
                    Back to Home
                </button>
            </div>
        </div>

        </>
    )
}

export default Card
