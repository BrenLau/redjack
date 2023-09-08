import './card.css'
import spade from './suits/spade.png'
import heart from './suits/heart.png'
import club from './suits/club.png'
import diamond from './suits/diamond.png'
import { useState } from 'react'

const Card = ({ card, cardCounter }) => {
    const [cardCount, setCardCount] = useState(cardCounter)
    return (
        <div className='card' onClick={(e) => {
            if (cardCount[card] > 0) {
                let currentCards = { ...cardCount }
                currentCards[card] -= 1
                setCardCount(currentCards)
            }
        }}>

            <div className='topline'>{
                card[0] === 'T' ? '10' : card[0]
            }</div>

            <img className='suit' src={
                card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
            }></img>
            <div className='botline'>x{cardCount[card]}</div>

        </div >
    )
}

export default Card
