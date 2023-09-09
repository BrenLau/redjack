import './dealerhand.css'
import Card from '../Card/Card'

const DealerHand = ({ card }) => {
    return (
        <div className='dealerspot'>
            {card ? <Card card={card} noClick={true} /> : null}
        </div>
    )
}

export default DealerHand
