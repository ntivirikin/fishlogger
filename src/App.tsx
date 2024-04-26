import { useState } from 'react'
import HomePage from './components/HomePage.tsx'
import Dashboard from './components/Dashboard.tsx'

// import './App.css'

function App() {
    const [mainView, setMainView] = useState<'home' | 'dash'>('home')

    return (
        <div className="min-h-screen bg-slate-800 text-slate-100">

            {mainView === 'home' && <HomePage onLoginClick={() => setMainView('dash')}/>}
            {mainView === 'dash' && <Dashboard onSignOutClick={() => setMainView('home')}/>}

        </div>
    )
}

export default App
