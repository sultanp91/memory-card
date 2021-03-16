import React from "react";
import Card from "./Card";

function Container({cards, playRound}) {

  
  return (
    <div>
      <div className="card-container">
        {cards.map((item) => (
            <Card playRound={playRound} key={item.card} card={item.card}/>
        ))}
      </div>
    </div>
  );
}

export default Container;
