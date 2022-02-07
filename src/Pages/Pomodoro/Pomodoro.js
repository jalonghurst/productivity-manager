import React from "react";
import { ButtonGroup, Typography } from "@material-ui/core";
import TimerButton from "./TimerButton";
import Time from "./Time";
import {
  createTheme,
  withStyles,
} from "@material-ui/core/styles";


const default_minutes = 25;
const seconds = 60;
const minutes = 5;

const styles = theme => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    cursor: "pointer",
  },
    
  pomodoro: {
    margin: "0 auto",
    height: 400,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: "gold",   
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

class Pomodoro extends React.Component {
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
      <div theme={darkTheme} className={this.props.classes.pomodoro}>
        <div className={this.props.classes.title}>Pomodoro</div>
        <div className={this.props.classes.tagline}>
        <Typography
            variant="subtitle2"
            style={{
              color: "gold",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            A simple pomodoro timer
          </Typography>
        </div>
        <Time
          decrement={this.decrement}
          incremement={this.increment}
          time={MHSTime}
        /> 
        <div >
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

export default withStyles(styles)(Pomodoro);