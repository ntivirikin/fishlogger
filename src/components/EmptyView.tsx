interface EmptyViewProps {
    onCreateClick: () => void;
    onSignOutClick: () => void;
}

const EmptyView : React.FC<EmptyViewProps> = ({ onCreateClick, onSignOutClick }) => {
    return (
        <>
            <h2>Welcome to the dashboard!</h2>
            <p>You have no catches logged! Please click the Create button to add a catch.</p>

            <div className="button-box">
                <button onClick={onCreateClick}>
                    Create
                </button>
                <button onClick={onSignOutClick}>
                    Sign Out
                </button>
            </div>
        </>
    )
}

export default EmptyView