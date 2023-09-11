import './dealerhand.css'
import Card from '../Card/Card'
import { useState, useEffect } from 'react'
import calcOdds from './calcOdds'

const DealerHand = ({ card, cardCount, ResetButton, countHand, yourCards }) => {
    let aceCount = cardCount['AS'] + cardCount['AH'] + cardCount['AC'] + cardCount['AD']
    let twoCount = cardCount['2S'] + cardCount['2H'] + cardCount['2C'] + cardCount['2D']
    let threeCount = cardCount['3S'] + cardCount['3H'] + cardCount['3C'] + cardCount['3D']
    let fourCount = cardCount['4S'] + cardCount['4H'] + cardCount['4C'] + cardCount['4D']
    let fiveCount = cardCount['5S'] + cardCount['5H'] + cardCount['5C'] + cardCount['5D']
    let sixCount = cardCount['6S'] + cardCount['6H'] + cardCount['6C'] + cardCount['6D']
    let sevenCount = cardCount['7S'] + cardCount['7H'] + cardCount['7C'] + cardCount['7D']
    let eightCount = cardCount['8S'] + cardCount['8H'] + cardCount['8C'] + cardCount['8D']
    let nineCount = cardCount['9S'] + cardCount['9H'] + cardCount['9C'] + cardCount['9D']
    let tenCount = cardCount['TS'] + cardCount['TH'] + cardCount['TC'] + cardCount['TD'] + cardCount['JS'] + cardCount['JH'] + cardCount['JC'] + cardCount['JD'] + cardCount['QS'] + cardCount['QH'] + cardCount['QC'] + cardCount['QD'] + cardCount['KS'] + cardCount['KH'] + cardCount['KC'] + cardCount['KD']
    let totalCount = aceCount + twoCount + threeCount + fourCount + fiveCount + sixCount + sevenCount + eightCount + nineCount + tenCount
    const [odds, setOdds] = useState({})

    useEffect(() => {
        if (card) {
            setOdds(calcOdds(card[0], Number(aceCount), Number(twoCount), Number(threeCount), Number(fourCount), Number(fiveCount), Number(sixCount), Number(sevenCount), Number(eightCount), Number(nineCount), Number(tenCount), totalCount))
        }
    }, [card, cardCount])

    const [yourCardCount, setYourCardCount] = useState()

    useEffect(() => {
        setYourCardCount(countHand(yourCards))
    }, [yourCards])


    return (
        <div className='dealerspot'>
            {card ? <Card card={card} noClick={true} /> : <div className='dealerspot2'></div>}
            {card ? <div className='approxodds'>Approximate Odds:
                <div className='approxnum'>{`17: ${odds.odds17}`}
                </div>
                <div className='approxnum'>{`18: ${odds.odds18}`}
                </div>
                <div className='approxnum'>{`19: ${odds.odds19}`}
                </div>
                <div className='approxnum'>{`20: ${odds.odds20}`}
                </div>
                <div className='approxnum'>{`21: ${odds.odds21}`}
                </div>
                <div className='approxnum red'>{`Bust: ${(1 - (odds.odds17) - (odds.odds18) - (odds.odds19) - (odds.odds20) - (odds.odds21)).toFixed(3)}`}
                </div>
                <div className='approxnum'>{`Dealer wins: ${yourCardCount < 17 ? Number(odds.odds17) + Number(odds.odds18) + Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 17 ? Number(odds.odds18) + Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 18 ? Number(odds.odds19) + Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 19 ? Number(odds.odds20) + Number(odds.odds21) : yourCardCount === 20 ? Number(odds.odds21) : 0}`}
                </div>
            </div> : null}

            <ResetButton />
        </div>
    )
}

export default DealerHand
