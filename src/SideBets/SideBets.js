import './sidebets.css'

const SideBets = ({ pairs, trios, flush, straight }) => {
    return (

        <>
            <div className='spacer'></div>
            <div className="sidebets">
                <h2 className='sidebetstitle'>Side Bet Odds</h2>
                <div className='sidebetsodds'>Pairs: {(pairs * 100).toFixed(3)}%</div>
                <div className='sidebetsodds'>Trios: {(trios * 100).toFixed(3)}%</div>
                <div className='sidebetsodds'>Flush: {(flush * 100).toFixed(3)}%</div>
                <div className='sidebetsodds'>Straight: {(straight * 100).toFixed(3)}%</div>
            </div>
        </>
    )
}

export default SideBets
