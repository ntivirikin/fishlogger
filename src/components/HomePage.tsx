import smallLogo from '/small_logo.png'

import Card from './Card.tsx'

import './HomePage.css'

interface HomePageProps {
    onLoginClick: () => void;
}

const HomePage : React.FC<HomePageProps> = ( {onLoginClick} ) => {
    return (
        <>
            <img src={smallLogo} className="small-logo" alt="FishLogger small logo" />
            <h1>FishLogger</h1>
            
            <div className="card">
                <Card onLoginClick={onLoginClick}/>
            </div>

            <p className="read-the-docs">
                Lorem ipsum.
            </p>
        </>
    )
}

export default HomePage
