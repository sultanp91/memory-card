import React, { useState, useEffect } from "react";
import Card from "./Card";
import { gameData } from "./gameData";

function Container() {
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);

  const [cards, setCards] = useState(JSON.parse(JSON.stringify(gameData)));

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  const playRound = (evt) => {
    const card = [...cards];
    shuffle(card);
    for (let i = 0; i < card.length; i++) {
      if (card[i].id === evt.target.id && card[i].count === 0) {
        card[i].count = card[i].count + 1;
        setScore(score + 1);
        setCards(card);
      } else if (card[i].id === evt.target.id && card[i].count === 1) {
        setCards(JSON.parse(JSON.stringify(gameData)));
        setScore(0);
      }
    }
  };

  useEffect(() => {
    if (score > maxScore) {
      setMaxScore(score);
    }
  }, [score, maxScore]);

  return (
    <div>
      <h1>
        Current score: {score} Max Score: {maxScore}
      </h1>
      <div className="card-container">
        {cards.map((item) => (
            <Card playRound={playRound} card={item.card}/>
        ))}
      </div>
    </div>
  );
}

export default Container;
