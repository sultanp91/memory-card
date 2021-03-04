import React, { useState } from 'react';

function Container() {

        const [ cards, setCards ] = useState([
            {card: "img1", count: 0},
            {card: "img2", count: 0},
            {card: "img3", count: 0},
            {card: "img4", count: 0}]);

    return (
        <div>
            {cards.map((item) => <p>{item.card} - {item.count}</p>)}
        </div>
    )
}

export default Container
