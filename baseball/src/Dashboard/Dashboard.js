import React from "react";

function Dashboard(props) {
  return (
    <div>
      <button onClick={props.strike}>Strikes</button>
      <button onClick={props.ball}>Balls</button>
      <button onClick={props.foul}>Fouls</button>
      <button onClick={props.hit}>Hits</button>
    </div>
  );
}

export default Dashboard; 