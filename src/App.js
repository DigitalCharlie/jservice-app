//Dependencies
import {useState} from "react";

import "./style.css";

// Components 
import Score from "./components/Score"
import PlayArea from "./components/PlayArea";

export default function App () {

  const [score, setScore] = useState(0)

  const resetScore = () => setScore(0)

  const changeScore = (num) => {
    setScore(score+num)
  }

  // Structuring it this way so that I have to lift state, pulling the question info up from the play area to change the score here and then display it in a sibling.
  return (
    <div className="app">
      <main>
        <h1>Welcome to Jeopardy!</h1>
        <Score score={score} resetScore={resetScore}/>
        <PlayArea changeScore={changeScore}/>
      </main>
    </div>
  );
}