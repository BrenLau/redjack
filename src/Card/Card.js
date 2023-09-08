import './card.css'
import spade from './suits/spade.png'
import heart from './suits/heart.png'
import club from './suits/club.png'
import diamond from './suits/diamond.png'
import { useState } from 'react'
import Modal from '../Modal/Modal'

const Card = ({ cardCount, setCardCount, dealercard, card, cardCounter, setDealercard }) => {
    const [decide, setDecide] = useState(false)
    return (
        <>
            {decide ? <Modal onClick={setDecide}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }} className='decideBar'>
                    <div className='card'>
                        <div className='topline'>{
                            card[0] === 'T' ? '10' : card[0]
                        }</div>

                        <img className='suit' src={
                            card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
                        }></img>
                        <div className='botline'>x{cardCount[card]}</div>

                    </div >
                    <div className='options'>
                        <button className='decisionButton'
                            // disabled={dealercard ? true : false}
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                if (cardCount[card] > 0) {
                                    let currentCards = { ...cardCount }
                                    currentCards[dealercard] += 1
                                    setDealercard(card)
                                    currentCards[card] -= 1
                                    setCardCount(currentCards)
                                    setDecide(false)
                                }
                            }}>Dealer</button>
                        <button className='decisionButton' onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (cardCount[card] > 0) {
                                let currentCards = { ...cardCount }
                                currentCards[card] -= 1
                                setCardCount(currentCards)
                                setDecide(false)

                            }
                        }}>Your Hand</button>
                        <button className='decisionButton' onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (cardCount[card] > 0) {
                                let currentCards = { ...cardCount }
                                currentCards[card] -= 1
                                setCardCount(currentCards)
                                setDecide(false)

                            }
                        }}>Discard</button>
                    </div>
                </div>
            </Modal> : null}
            <div className='card' onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                if (cardCount[card] > 0) {
                    setDecide(card)
                }
            }}>

                <div className='topline'>{
                    card[0] === 'T' ? '10' : card[0]
                }</div>

                <img className='suit' src={
                    card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
                }></img>
                {cardCounter ? <div className='botline'>x{cardCount[card]}</div> : null}

            </div >
        </>
    )
}

export default Card
