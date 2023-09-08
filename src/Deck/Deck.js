import './deck.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Deck = ({ defaultDeck, cardCounter, setCurrentDeck, reset, currentDeck }) => {

    // useEffect(() => {
    //     reset(5)
    // }, [])

    return (
        <div className='deck'>
            <div className='deckcount'>{currentDeck.length}</div>
            {defaultDeck.map((card) => {

                return (
                    <Card card={card} cardCounter={cardCounter} />
                )
            }
            )}
        </div>
    )
}

export default Deck
