import './deck.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'

const Deck = ({ setYourCount, yourCards, setYourCards, cardCount, setCardCount, dealercard, setDealercard, defaultDeck, cardCounter, setCurrentDeck, reset, currentDeck }) => {

    return (
        <div className='deck'>
            {defaultDeck.map((card) => {

                return (
                    <Card setYourCount={setYourCount} yourCards={yourCards} setYourCards={setYourCards} cardCount={cardCount} setCardCount={setCardCount} dealercard={dealercard} setDealercard={setDealercard} card={card} cardCounter={cardCounter} />
                )
            }
            )}
        </div>
    )
}

export default Deck
