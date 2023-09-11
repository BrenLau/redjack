import './yourhand.css'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'

const YourHand = ({ cardCount, yourCards, setYourCards, yourCount, countHand, setYourCount }) => {

    const [aceCount, setAceCount] = useState()
    const [twoCount, setTwoCount] = useState()
    const [threeCount, setThreeCount] = useState()
    const [fourCount, setFourCount] = useState()
    const [fiveCount, setFiveCount] = useState()
    const [sixCount, setSixCount] = useState()
    const [sevenCount, setSevenCount] = useState()
    const [eightCount, setEightCount] = useState()
    const [nineCount, setNineCount] = useState()
    const [tenCount, setTenCount] = useState()
    const [totalCount, setTotalCount] = useState()
    const [bustOdds, setBustOdds] = useState(0)




    useEffect(() => {
        setYourCount(countHand(yourCards))
        setAceCount(cardCount['AS'] + cardCount['AH'] + cardCount['AC'] + cardCount['AD'])
        setTwoCount(cardCount['2S'] + cardCount['2H'] + cardCount['2C'] + cardCount['2D'])
        setThreeCount(cardCount['3S'] + cardCount['3H'] + cardCount['3C'] + cardCount['3D'])
        setFourCount(cardCount['4S'] + cardCount['4H'] + cardCount['4C'] + cardCount['4D'])
        setFiveCount(cardCount['5S'] + cardCount['5H'] + cardCount['5C'] + cardCount['5D'])
        setSixCount(cardCount['6S'] + cardCount['6H'] + cardCount['6C'] + cardCount['6D'])
        setSevenCount(cardCount['7S'] + cardCount['7H'] + cardCount['7C'] + cardCount['7D'])
        setEightCount(cardCount['8S'] + cardCount['8H'] + cardCount['8C'] + cardCount['8D'])
        setNineCount(cardCount['9S'] + cardCount['9H'] + cardCount['9C'] + cardCount['9D'])
        setTenCount(cardCount['TS'] + cardCount['TH'] + cardCount['TC'] + cardCount['TD'] + cardCount['JS'] + cardCount['JH'] + cardCount['JC'] + cardCount['JD'] + cardCount['QS'] + cardCount['QH'] + cardCount['QC'] + cardCount['QD'] + cardCount['KS'] + cardCount['KH'] + cardCount['KC'] + cardCount['KD'])
        setTotalCount(aceCount + twoCount + threeCount + fourCount + fiveCount + sixCount + sevenCount + eightCount + nineCount + tenCount)

        if (21 - yourCount > 9) {
            setBustOdds(0)
        }
        if (21 - yourCount === 9) {
            setBustOdds(tenCount / totalCount)
        } else if (21 - yourCount === 8) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount))
        } else if (21 - yourCount === 7) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount))
        } else if (21 - yourCount === 6) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount))
        } else if (21 - yourCount === 5) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount) + (sixCount / totalCount))
        } else if (21 - yourCount === 4) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount) + (sixCount / totalCount) + (fiveCount / totalCount))
        } else if (21 - yourCount === 3) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount) + (sixCount / totalCount) + (fiveCount / totalCount) + (fourCount / totalCount))
        } else if (21 - yourCount === 2) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount) + (sixCount / totalCount) + (fiveCount / totalCount) + (fourCount / totalCount) + (threeCount / totalCount))
        } else if (21 - yourCount === 1) {
            setBustOdds((tenCount / totalCount) + (nineCount / totalCount) + (eightCount / totalCount) + (sevenCount / totalCount) + (sixCount / totalCount) + (fiveCount / totalCount) + (fourCount / totalCount) + (threeCount / totalCount) + (threeCount / totalCount))
        }

    }, [yourCards, cardCount, yourCount])


    return (
        <div className='yourhand'>
            <div className='yourcount'>{yourCount} --- BustOdds: {bustOdds.toFixed(2)}</div>
            {yourCards.map(card => {
                return (
                    <Card noClick={true} card={card} />
                )
            })}
        </div>
    )
}

export default YourHand
