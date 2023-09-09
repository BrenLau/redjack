import './yourhand.css'
import Card from '../Card/Card'
import { useEffect } from 'react'

const YourHand = ({ yourCards, setYourCards, yourCount, countHand, setYourCount }) => {
    useEffect(() => {
        setYourCount(countHand(yourCards))

    }, [yourCards])
    return (
        <div className='yourhand'>
            <div className='yourcount'>{yourCount}</div>
            {yourCards.map(card => {
                return (
                    <Card noClick={true} card={card} />
                )
            })}
        </div>
    )
}

export default YourHand
