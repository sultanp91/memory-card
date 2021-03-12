import React from "react";

function Card({ card, playRound }) {
  return (
    <div className="card-div">
      <img
        onClick={playRound}
        key={card}
        id={card}
        src={`./img/${card}.png`}
        alt={card}
        className="card-image"
      />
    </div>
  );
}

export default Card;
