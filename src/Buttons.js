import React from 'react';


function Buttons(props) {
  const change = (name, points) => {
    if(name === 'home') {
      props.setHomeScore(props[`${name}Score`] + points)
    } else {
      props.setAwayScore(props[`${name}Score`] + points)
    }
  };

  return (
    <section className="buttons">
      <div className="homeButtons">
        {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
        <button className="homeButtons__touchdown" onClick={() => change('home', 7)} >Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => change('home', 3)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => change('away', 7)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => change('away', 3)}>Away Field Goal</button>
      </div>
    </section>
  );
}


export default Buttons;