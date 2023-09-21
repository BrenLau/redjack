import './sidebets.css'

const SideBets = ({ pairs, trios, flush, straight }) => {
    return (

        <>
            <div className='spacer'></div>
            <div className="sidebets">
                <h2>Side Bet Odds</h2>
                <div>Pairs: {(pairs * 100).toFixed(3)}%</div>
                <div>Trios: {(trios * 100).toFixed(3)}%</div>
                <div>Flush: {(flush * 100).toFixed(3)}%</div>
                <div>Straight: {(straight * 100).toFixed(3)}%</div>
            </div>
        </>
    )
}

export default SideBets
