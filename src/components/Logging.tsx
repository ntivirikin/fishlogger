import smallLogo from '/small_logo.png'

import './Logging.css'

interface LoggingProps {
    onBackClick: () => void;
}

const Logging : React.FC<LoggingProps> = ( {onBackClick} ) => {
    return (
        <>
            <p>Please fill out the information below to log your catch!</p>

            <div className="side-flex input-back">
                <div className="flex-container">

                    <span>Date:</span>
                    <input />

                    {/* Common Name (Latin Name) */}
                    <span>Fish Species:</span>
                    <input /> {/* Typing brings down list */}

                    <span>Location:</span>
                    <input />
                    
                    {/* Optional */}
                    <span>Length:</span>
                    <input />

                    {/* Optional */}
                    <span>Weight:</span>
                    <input />

                    {/* Optional */}
                    <span>Weather:</span>
                    <input />

                    {/* Optional */}
                    <span>Fishing Technique:</span>
                    <input /> {/* Select from options:*/}

                    {/* Optional */}
                    <span>Lure/Bait:</span>
                    <input /> {/* Select from options:*/}

                </div>
                <img src={smallLogo} className="fish-species" alt="Fish species photograph"/>
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