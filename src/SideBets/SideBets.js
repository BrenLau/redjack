import './sidebets.css'

const SideBets = ({ pairs }) => {
    return (

        <>
            <div className='spacer'></div>
            <div className="sidebets">
                <h2>Side Bet Odds</h2>
                <div>Pairs: {pairs.toFixed(3)}</div>
            </div>
        </>
    )
}

export default SideBets
