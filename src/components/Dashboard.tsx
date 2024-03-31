import { useState } from 'react'
import EmptyView from './EmptyView.tsx'
import CatchView from './CatchView.tsx'

interface DashboardProps {
    onSignOutClick: () => void;
}

const Dashboard : React.FC<DashboardProps> = ({ onSignOutClick }) => {
    const [emptView, setEmptView] = useState<true | false>(true)

    // Call a function that checks the users catches to see if any are there
        // Set to true if any catches are present
        // Mock this for testing

    return (
        <>

        <div>
            {emptView === true && <EmptyView onCreateClick={() => setEmptView(false)} onSignOutClick={onSignOutClick} />}
            {emptView === false && <CatchView onBackClick={() => setEmptView(true)} />}
        </div>

        </>
    )
}

export default Dashboard
