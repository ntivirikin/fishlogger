import smallLogo from '/small_logo.png'
import Card from './components/Card.tsx'

import './App.css'

function App() {

  return (
    <>
      <img src={smallLogo} className="small-logo" alt="FishLogger small logo" />
      <h1>FishLogger</h1>
      
      <div className="card">
        <Card />
      </div>

      <p className="read-the-docs">
        Lorem ipsum.
      </p>
    </>
  )
}

export default App
