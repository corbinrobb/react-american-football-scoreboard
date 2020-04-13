//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import TopRow from "./TopRow";
import BottomRow from "./BottomRow";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
        <Buttons homeScore={homeScore} awayScore={awayScore} setHomeScore={setHomeScore} setAwayScore={setAwayScore} />
    </div>
  );
}

export default App;