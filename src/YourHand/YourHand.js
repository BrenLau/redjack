import './yourhand.css'
import Card from '../Card/Card'

const YourHand = ({ yourCards, setYourCards }) => {
    return (
        <div className='yourhand'>
            {yourCards.map(card => {
                return (
                    <Card card={card} />
                )
            })}
        </div>
    )
}

export default YourHand
