import React from "react";

function Card({ card, playRound }) {
  return (
    <div className="card-div" onClick={playRound} data-card={card}>
      <img src={`./img/${card}.png`} onClick={playRound} data-card={card} alt={card} className="card-image" />
    </div>
  );
}

export default Card;