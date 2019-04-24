import React, { Component } from "react";
import Dashboard from "../dashboard/Dashboard.js";

class Display extends Component {
    state = {
        strikes: 0,
        balls: 0
    };

    strike = () => {
      if (this.state.strikes < 2) {
        this.setState({
          ...this.state,
          strikes: this.state.strikes + 1
        });
      } else {
        this.setState({
          strikes: 0,
          balls: 0
        });
      }
    };
    
    ball = () => {
      if (this.state.balls < 3) {
        this.setState({
          ...this.state,
          balls: this.state.balls + 1
        });
      } else {
        this.setState({
          strikes: 0,
          balls: 0
        });
      }
    };

    foul = () => {
      if (this.state.strikes < 2) {
        this.setState({
          ...this.state,
          strikes: this.state.strikes + 1
        });
      } else {
        this.setState({
          ...this.state
        });
      }
    };
    
    hit = () => {
        this.setState({
            strikes: 0,
            balls: 0
        });
    };

  render() {
    return (
      <div>
        <h1>Baseball Counter</h1>

        <div>
            <h2>Strikes: {this.state.strikes}</h2>
            <h2>Balls: {this.state.balls}</h2>
        </div>

        <Dashboard
            strike={this.strike}
            ball={this.ball}
            foul={this.foul}
            hit={this.hit}
        />
      </div>
    );
  }
}

export default Display; 