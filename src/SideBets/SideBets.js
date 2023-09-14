import './sidebets.css'

const SideBets = ({ pairs, trios }) => {
    return (

        <>
            <div className='spacer'></div>
            <div className="sidebets">
                <h2>Side Bet Odds</h2>
                <div>Pairs: {pairs.toFixed(3)}</div>
                <div>Trios: {trios.toFixed(3)}</div>
                <div>Flush: </div>
            </div>
        </>
    )
}

export default SideBets
