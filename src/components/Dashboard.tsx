import { useState } from 'react'
import EmptyView from './EmptyView.tsx'
import CatchView from './CatchView.tsx'
import Logging from './Logging.tsx'

interface DashboardProps {
    onSignOutClick: () => void;
}

const Dashboard : React.FC<DashboardProps> = ({ onSignOutClick }) => {
    const [emptView, setEmptView] = useState<'empty' | 'create' | 'catches'>('empty')

    // Call a function that checks the users catches to see if any are there
        // Set to true if any catches are present
        // Mock this for testing

    return (
        <>

        <div>
            {/* May need to join EmptyView and CatchView components */}
            {emptView === 'empty' && <EmptyView onCreateClick={() => setEmptView('create')} onSignOutClick={onSignOutClick} />}
            {emptView === 'catches' && <CatchView onBackClick={() => setEmptView('empty')} />}
            {emptView === 'create' && <Logging onBackClick={() => setEmptView('empty')} />}
        </div>

        </>
    )
}

export default Dashboard
