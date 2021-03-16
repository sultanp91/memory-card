import React from "react";

function Nav({ score, maxScore }) {
  return (
    <nav className="nav">
      <h1 className="header">Memory Game!</h1>
      <h2 className="scoreboard">
        Current score: {score} Max Score: {maxScore}
      </h2>
    </nav>
  );
}

export default Nav;
