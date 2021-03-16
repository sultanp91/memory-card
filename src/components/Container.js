import React from "react";
import Card from "./Card";

function Container({cards, playRound}) {
  
  return (
      <div className="card-container">
        {cards.map((item) => (
            <Card playRound={playRound} key={item.card} card={item.card}/>
        ))}
      </div>
  );
}

export default Container;
