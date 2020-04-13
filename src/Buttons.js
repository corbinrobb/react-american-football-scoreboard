import React from 'react';

function Buttons(props) {

  const change = (name, points) => {
    if(name === 'home') {
      props.setHomeScore(props.homeScore + points)
    } else {
      props.setAwayScore(props.awayScore + points)
    }
  };

  const changeQuarter = () => {
    if(props.quarter >= 4) {
      props.setQuarter(1);
    } else {  
      props.setQuarter(props.quarter + 1);
    }
  }

  const changeDown = () => {
    if (props.down >= 4) {
      props.setDown(1);
    } else {
      props.setDown(props.down + 1);
    }
  }



  return (
    <section>
      <div className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => change('home', 7)} >Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => change('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => change('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => change('away', 3)}>Away Field Goal</button>
        </div>
      </div>
      <div className="buttons">
        <div className="quarter-down-container">
          <button className="quarterButton" onClick={changeQuarter} >Next Quarter</button>
          <button className="downButton" onClick={changeDown} >Next Down</button>
        </div>
        <div className="input-container">
          <div>
            <label>Set To go</label>
            <input type="text" maxLength="2"  onChange={e => props.setToGo(e.target.value)}></input>
          </div>
          <div>
            <label>Set Ball On</label>
            <input type="text" maxLength="2" onChange={e => props.setBallOn(e.target.value)}></input>
          </div>
        </div>
      </div>
    </section>
  );
}


export default Buttons;