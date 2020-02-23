import React from "react";

const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className = "score">You scored {score}. You earned a tree!</div>
        <button className = "playBtn" onClick={playAgain}>
            Try again!
        </button>
    </div>
);

export default Result;