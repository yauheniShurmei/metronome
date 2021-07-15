import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Start.module.css";
import * as actionTypes from "../store/actions";

const Start = () => {
  const isPlay = useSelector((state) => state.isPlay);
  const dispatch = useDispatch();

  const clickOnPlay = () => {
    dispatch({
      type: actionTypes.ISPLAY,
      value: !isPlay,
    });
  };

  return (
    <div className={classes.startRoot}>
      <div
        onClick={clickOnPlay}
        className={isPlay ? classes.pause : classes.startPlay}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Start;
