import './Card.css'
import React from 'react';

const Card = (card) => {

    return (
        <div className='Card'>
            <div className='inner'>
                <div className='front'>
                    <p className='question'>{card.question}</p>
                </div>
                <div className='back'>
                    <p className='answer'>{card.answer}</p>
                </div>
            </div>
        </div>
    )

}

export default Card;