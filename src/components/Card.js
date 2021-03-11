import React from 'react'

function Card({card, id, playRound}) {
    return (
        <div>
            <img onClick={playRound} key={id} id={id} src={`./img/${card}.jpg`} alt={card}/>
        </div>
    )
}

export default Card
