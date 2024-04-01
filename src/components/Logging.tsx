interface LoggingProps {
    onBackClick: () => void;
}

const Logging : React.FC<LoggingProps> = ( {onBackClick} ) => {
    return (
        <>
            <p>Please fill out the information below to log your catch!</p>

            <div className="flex-container">

                {/* Common Name (Latin Name) */}
                <span>Fish Species:</span>
                <input /> {/* Typing brings down list */}

                <span>Date:</span>
                <input />

                <span>Location:</span>
                <input />

                <span>Length:</span>
                <input />

                <span>Weight:</span>
                <input />

            </div>

            <div className="button-box">
                <button>
                    Submit
                </button>
                <button onClick={onBackClick}>
                    Back
                </button>
            </div>

        </>
    )
}

export default Logging