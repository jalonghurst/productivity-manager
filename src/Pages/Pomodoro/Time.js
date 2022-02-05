import React from "react";
import TimerIconButton from "./TimerIconButton";
import { Add, Remove } from "@mui/icons-material";

const Time = props => {
  return (
    <div>
      <TimerIconButton onClick={props.decrement} aria-label="remove">
        <Remove />
      </TimerIconButton>
      <span>{props.time}</span>
      <TimerIconButton onClick={props.increment} aria-label="add">
        <Add />
      </TimerIconButton>
    </div>
  );
};

export default Time;
