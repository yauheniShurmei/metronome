import classes from "./TimeSignature.module.css";
import { connect, useDispatch } from "react-redux";
import * as actionsType from "../store/actions";
import { useState } from "react";

const TimeSignature = (props) => {
  let style = [classes.time_signature];

  return (
    <div className={style.join(" ")}>
      <ul onClick={props.chooseTimeSignature}>
        <li
          value="1"
          style={props.signr === 1 ? { backgroundColor: "orange" } : null}
        >
          1/4
        </li>
        <li
          value="2"
          style={props.signr === 2 ? { backgroundColor: "orange" } : null}
        >
          2/4
        </li>
        <li
          value="3"
          style={props.signr === 3 ? { backgroundColor: "orange" } : null}
        >
          3/4
        </li>
        <li
          value="4"
          style={props.signr === 4 ? { backgroundColor: "orange" } : null}
        >
          4/4
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signr: state.timeSignature,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chooseTimeSignature: (event) =>
      dispatch({
        type: actionsType.CHOOSE_TIMESIGNATURE,
        value: event.target.value,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TimeSignature);
