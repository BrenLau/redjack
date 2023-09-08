import './playingarea.css'
import Deck from '../Deck/Deck'
import { useState, useEffect } from 'react'

const defaultDeck = ['AS', 'AH', 'AC', 'AD', '2S', '2H', '2C', '2D', '3S', '3H', '3C', '3D', '4S', '4H', '4C', '4D', '5S', '5H', '5C', '5D', '6S', '6H', '6C', '6D', '7S', '7H', '7C', '7D', '8S', '8H', '8C', '8D', '9S', '9H', '9C', '9D', 'TS', 'TH', 'TC', 'TD', 'JS', 'JH', 'JC', 'JD', 'QS', 'QH', 'QC', 'QD', 'KS', 'KH', 'KC', 'KD']
const cardCounter = {
    'AS': 5, 'AH': 5, 'AC': 5, 'AD': 5,
    '2S': 5, '2H': 5, '2C': 5, '2D': 5,
    '3S': 5, '3H': 5, '3C': 5, '3D': 5,
    '4S': 5, '4H': 5, '4C': 5, '4D': 5,
    '5S': 5, '5H': 5, '5C': 5, '5D': 5,
    '6S': 5, '6H': 5, '6C': 5, '6D': 5,
    '7S': 5, '7H': 5, '7C': 5, '7D': 5,
    '8S': 5, '8H': 5, '8C': 5, '8D': 5,
    '9S': 5, '9H': 5, '9C': 5, '9D': 5,
    'TS': 5, 'TH': 5, 'TC': 5, 'TD': 5,
    'JS': 5, 'JH': 5, 'JC': 5, 'JD': 5,
    'QS': 5, 'QH': 5, 'QC': 5, 'QD': 5,
    'KS': 5, 'KH': 5, 'KC': 5, 'KD': 5,
}
let deck = []

const reset = (decks) => {
    deck = []

    for (let key in cardCounter) {
        cardCounter[key] = decks
    }

    for (let i = 0; i < decks; i++) {
        deck = [...deck, ...defaultDeck]
    }
    return deck
}

const PlayingArea = () => {

    const [currentDeck, setCurrentDeck] = useState([])

    useEffect(() => {
        reset(5)
        setCurrentDeck(deck)
    }, [])


    return (
        <div>
            <Deck defaultDeck={defaultDeck} cardCounter={cardCounter} currentDeck={currentDeck} setCurrentDeck={setCurrentDeck} reset={reset} />
        </div>
    )
}

export default PlayingArea
