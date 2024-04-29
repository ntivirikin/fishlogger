interface EmptyViewProps {
    onCreateClick: () => void;
    onSignOutClick: () => void;
}

const EmptyView : React.FC<EmptyViewProps> = ({ onCreateClick, onSignOutClick }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="mb-5">Welcome to the dashboard!</h2>
            <p className="mb-10">You have no catches logged! Please click the Create button to add a catch.</p>

            <div className="flex flex-row">
                <button onClick={onCreateClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md">
                    Create
                </button>
                <button onClick={onSignOutClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md ml-5">
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default EmptyView