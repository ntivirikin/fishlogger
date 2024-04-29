import sideImage from '/side_image.webp'

interface LoggingProps {
    onBackClick: () => void;
}

const Logging : React.FC<LoggingProps> = ( {onBackClick} ) => {
    return (
        <div className="flex flex-col items-center">
            <p className="my-8">Please fill out the information below to log your catch!</p>

            <div className="flex flex-row justify-center">
                <div className="bg-sky-800 rounded-md flex flex-col justify-center space-y-1 px-8">

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
                <img src={sideImage} className="size-1/4 ml-10 rounded-md" alt="Fish species photograph"/>
            </div>

            <div className="flex flex-row mt-10">
                <button className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md">
                    Submit
                </button>
                <button onClick={onBackClick} className="bg-blue-500 hover:bg-blue-300 px-5 py-2 rounded-md ml-5">
                    Back
                </button>
            </div>

        </div>
    )
}

export default Logging