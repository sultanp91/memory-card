import React, { useState } from 'react';
import uniqid from 'uniqid';

function Container() {

        const [ cards, setCards ] = useState([
            {card: "img1", count: 0, id: uniqid()},
            {card: "img2", count: 0, id: uniqid()},
            {card: "img3", count: 0, id: uniqid()},
            {card: "img4", count: 0, id: uniqid()}]);

        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            }

        const playRound = (evt) => { 
            const card = Object.assign([], cards);
            card.forEach((item) => {
               if(item.id === evt.target.id){
                    item.count = item.count + 1
               }
           })

           shuffle(card)

           setCards(card)
        }
    
    

    return (
        <div>
            {cards.map((item) => ( 
                <p onClick={playRound} 
                id={item.id}>
                {item.card} - {item.count}
                </p>))}
        </div>
    )
}

export default Container
