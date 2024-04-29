import smallLogo from '/small_logo.png'

import Card from './Card.tsx'

interface HomePageProps {
    onLoginClick: () => void;
}

const HomePage : React.FC<HomePageProps> = ( {onLoginClick} ) => {
    return (
        <div className="flex flex-col place-items-center space-y-4">

            <img src={smallLogo} className="size-48 mt-16" alt="FishLogger small logo" />
            <h1 className="text-4xl">FishLogger</h1>
            
            <div className="mt-8">
                <Card onLoginClick={onLoginClick}/>
            </div>

        </div>
    )
}

export default HomePage
