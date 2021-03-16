import React, { useState, useEffect } from 'react';
import './App.css';
import {gameData} from './components/gameData' 
import Container from './components/Container';
import Nav from './components/Nav';


function App() {

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
      if (card[i].card === evt.target.id && card[i].count === 0) {
        card[i].count = card[i].count + 1;
        setScore(score + 1);
        setCards(card);
      } else if (card[i].card === evt.target.id && card[i].count === 1) {
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
    
      <div className="App">
        <Nav score={score} maxScore={maxScore}/>
        <Container cards={cards} playRound={playRound}/>
      </div>
   
  );
}

export default App;
