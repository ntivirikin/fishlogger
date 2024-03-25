// import { useState } from 'react'
import smallLogo from '/small_logo.png'

import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  // const [view, setView] = useState('home')

  return (
    <>
      <img src={smallLogo} className="small-logo" alt="FishLogger small logo" />
      <h1>FishLogger</h1>
      
      {/* This card will change on login or register to display different fields  */}
      <div className="card">
        <button>
          Login
        </button>
        <button className="register-button"> 
          Register 
        </button>
        <p> 
          Welcome to FishLogger!
          Please login with an existing account or register a new account.
        </p>
      </div>
      <p className="read-the-docs">
        Lorem ipsum.
      </p>
    </>
  )
}

export default App
