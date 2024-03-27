import './Register.css'

function Card() {
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

            <button className="register-button">
                Register
            </button>
        </div>

        </>
    )
}

export default Card