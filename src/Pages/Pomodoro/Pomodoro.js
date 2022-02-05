import React from "react";
import { ButtonGroup } from "@material-ui/core";
import TimerButton from "./TimerButton";
import Time from "./Time";

import "../../Styles.css"; // TODO: improve styling

const default_minutes = 25;
const seconds = 60;
const minutes = 5;

export default class Pomodoro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      totalTime: default_minutes * seconds
    };
  }

  startTimer = () => {
    this.timerId = setInterval(() => {
      if (this.state.totalTime === this.state.time) {
        this.resetTimer();
        return;
      }
      this.setState({
        time: this.state.time + 1
      });
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timerId);
  };

  resetTimer = () => {
    clearInterval(this.timerId);
    this.setState({ time: 0 });
  };

  // TODO: combine increment/decrement onclick
  increment = () => {
    this.resetTimer();
    const time = this.state.totalTime + minutes * seconds;
    this.setState({ totalTime: time >= 0 ? time : 0 });
  };

  decrement = () => {
    this.resetTimer();
    const time = this.state.totalTime - minutes * 60;
    this.setState({ totalTime: time >= 0 ? time : 0 });
  };

  componentWillUnmount() {
    this.resetTimer();
  }

  render() {
    let measuredTime = new Date(null);
    measuredTime.setSeconds(this.state.totalTime - this.state.time);
    let MHSTime = measuredTime.toISOString().substr(11, 8);

    return (
      <div className="pomodoro">
        <div id="title">simple pomodoro</div>
        <Time
          decrement={this.decrement}
          incremement={this.increment}
          time={MHSTime}
        /> 
        <div>
          <ButtonGroup>
            <TimerButton onClick={this.startTimer}>start</TimerButton>
            <TimerButton onClick={this.stopTimer}>stop</TimerButton>
            <TimerButton onClick={this.resetTimer}>reset</TimerButton>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
