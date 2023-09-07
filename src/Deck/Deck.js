import './deck.css'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'

const defaultDeck = ['AS', 'AD', 'AH', 'AC', '2S', '2D', '2H', '2C', '3S', '3H', '3C', '3D', '4S', '4H', '4C', '4D', '5S', '5H', '5C', '5D', '6S', '6H', '6C', '6D', '7S', '7H', '7C', '7D', '8S', '8H', '8C', '8D', '9S', '9H', '9C', '9D', 'TS', 'TH', 'TC', 'TD', 'JS', 'JH', 'JC', 'JD', 'QS', 'QH', 'QC', 'QD', 'KS', 'KH', 'KC', 'KD']

let deck = []

const reset = (decks) => {
    deck = []
    for (let i = 0; i < decks; i++) {
        deck = [...deck, ...defaultDeck]
    }
    return deck
}

const Deck = ({ deckCount }) => {

    const [currentDeck, setCurrentDeck] = useState([])

    useEffect(() => {
        reset(5)
        setCurrentDeck(deck)
    }, [])



    return (
        <>
            <Card card={'KC'} />
            <div>{currentDeck.length}</div>
        </>
    )
}

export default Deck
