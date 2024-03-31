import { useState } from 'react'
import HomePage from './components/HomePage.tsx'
import Dashboard from './components/Dashboard.tsx'

import './App.css'

function App() {
    const [mainView, setMainView] = useState<'home' | 'dash'>('home')

    return (
        <>

            {mainView === 'home' && <HomePage onLoginClick={() => setMainView('dash')}/>}
            {mainView === 'dash' && <Dashboard onSignOutClick={() => setMainView('home')}/>}

        </>
    )
}

export default App
