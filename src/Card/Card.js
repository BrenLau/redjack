import './card.css'
import spade from './suits/spade.png'
import heart from './suits/heart.png'
import club from './suits/club.png'
import diamond from './suits/diamond.png'
import { useState } from 'react'
import Modal from '../Modal/Modal'

const Card = ({ deckCard, noClick, setYourCount, yourCards, setYourCards, cardCount, setCardCount, dealercard, card, cardCounter, setDealercard }) => {
    const [decide, setDecide] = useState(false)
    return (
        <>
            {decide ? <Modal onClick={setDecide}>
                <div onClick={(e) => {
                    e.stopPropagation()
                }}
                    className='decideBar'>

                    <div className='options'>
                        <button className='decisionButton'
                            onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                if (cardCount[card] > 0) {
                                    let currentCards = { ...cardCount }
                                    if (dealercard) {
                                        currentCards[dealercard] += 1
                                    }
                                    setDealercard(card)
                                    currentCards[card] -= 1
                                    setCardCount(currentCards)
                                    setDecide(false)
                                }
                            }}><div className='card'>
                                <div className='topline' id={card[1] === 'H' || card[1] === 'D' ? 'red' : null}>{
                                    card[0] === 'T' ? '10' : card[0]
                                }</div>

                                <img className='suit' src={
                                    card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
                                }></img>
                                <div className='botline'>x{cardCount[card]}</div>

                            </div >Dealer</button>
                        <button className='decisionButton' onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (cardCount[card] > 0) {
                                let currentCards = { ...cardCount }
                                currentCards[card] -= 1
                                setCardCount(currentCards)
                                setDecide(false)

                            }
                        }}><div className='card'>
                                <div className='topline'>{
                                    card[0] === 'T' ? '10' : card[0]
                                }</div>

                                <img className='suit' src={
                                    card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
                                }></img>
                                <div className='botline'>x{cardCount[card]}</div>

                            </div >Discard</button>
                        <button className='decisionButton' onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            if (cardCount[card] > 0) {
                                let currentCards = { ...cardCount }
                                currentCards[card] -= 1
                                let yourCurrentCards = [...yourCards]
                                yourCurrentCards.push(card)
                                setYourCards(yourCurrentCards)
                                setCardCount(currentCards)
                                setDecide(false)

                            }
                        }}><div className='card'>
                                <div className='topline'>{
                                    card[0] === 'T' ? '10' : card[0]
                                }</div>

                                <img className='suit' src={
                                    card[1] === 'S' ? spade : card[1] === 'H' ? heart : card[1] === 'C' ? club : diamond
                                }></img>
                                <div className='botline'>x{cardCount[card]}</div>

                            </div >Your Hand</button>
                    </div>
                </div>
            </Modal> : null}
            <div className='card' onClick={noClick ? null : (e) => {
                e.preventDefault()
                e.stopPropagation()
                if (cardCount[card] > 0) {
                    setDecide(card)
                }
            }}
                onContextMenu={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
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
                {cardCounter ? <div className='botline'>x{cardCount[card]}</div> : null}

            </div >
        </>
    )
}

export default Card
