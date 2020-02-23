import React from "react";
import tree from "../assets/tree.png";
import sapling from "../assets/sapling.png"

const Result = ({score, playAgain}) => (
    <div className="score-board">
        
        <div className ="tree"><section>
            <img class ="bottom" src = {tree} alt="big tree"/>
            <img class = "top" src = {sapling} alt = "small tree"/>
        </section></div>

        <div className = "score">You scored ${score}. You earned a tree!</div>
            
        



        <button className = "playBtn" onClick={playAgain}>
            Try again!
        </button>
    </div>
);

export default Result;