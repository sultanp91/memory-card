import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function Container() {
        const initalState = [
            {card: "img1", count: 0, id: uniqid()},
            {card: "img2", count: 0, id: uniqid()},
            {card: "img3", count: 0, id: uniqid()},
            {card: "img4", count: 0, id: uniqid()}]

        const [ score, setScore ] = useState(0);
        const [ maxScore, setMaxScore ] = useState(0);

        const [ cards, setCards ] = useState([...initalState]);

        const shuffle = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        const playRound = (evt) => { 
            const card = Object.assign([], cards);
            for(let i = 0; i < card.length; i++){
                if(card[i].id === evt.target.id && card[i].count === 0){
                    card[i].count = card[i].count + 1
                    setScore(score + 1)
               } else if(card[i].id === evt.target.id && card[i].count === 1){
                   setCards([...initalState])
                   setScore(0)
               }
            }
            
           shuffle(card)
           setCards(card)
        }
    
        useEffect(() => {
            if(score > maxScore){
                setMaxScore(score)
            }
        }, [score, maxScore])
    

    return (
        <div>
            <h1>Current score: {score} Max Score: {maxScore}</h1>
            {cards.map((item) => ( 
                <p onClick={playRound} 
                id={item.id}>
                {item.card} - {item.count}
                </p>))}
            
        </div>
    )
}

export default Container
