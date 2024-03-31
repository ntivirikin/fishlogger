interface CatchViewProps {
    onBackClick: () => void;
}

const CatchView : React.FC<CatchViewProps> = ( {onBackClick} ) => {
    return (
        <>
            <p>You caught a huge mackerel!</p>

            <div className="button-box">
                <button onClick={onBackClick}>
                    Back
                </button>
            </div>
        </>
    )

}

export default CatchView