import React from "react";

function Card({ card, id, playRound }) {
  return (
    <div className="card">
      <img
        onClick={playRound}
        key={id}
        id={id}
        src={`./img/${card}.jpg`}
        alt={card}
        className="card-image"
      />
    </div>
  );
}

export default Card;
