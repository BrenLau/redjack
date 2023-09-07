import './card.css'
import spade from './suits/spade.png'
import heart from './suits/heart.png'
import club from './suits/club.png'
import diamond from './suits/diamond.png'

const Card = ({ card }) => {
    return (
        <div className='card'>

            <div className='topline'>{
                card[0] === 'T' ? '10' : card[0]
            }</div>

            <img className='suit' src={
                card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
            }></img>

        </div >
    )
}

export default Card
