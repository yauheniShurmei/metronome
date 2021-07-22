import { useDispatch, useSelector } from "react-redux";
import classes from "./MetroFigure.module.css";
import * as actionTypes from "../store/actions";

const MetroFigure = () => {
  const onFigure = useSelector((state) => state.onFigure);
  const dispatch = useDispatch();

  const chooseMetronomeFigure = (event) => {
    dispatch({
      type: actionTypes.CHOOSE_FIGURE,
      value: event,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.labelFigure}>FIGURE</div>
      <div
        style={
          onFigure === 0
            ? { border: "2px solid cadetblue", boxShadow: "5px 5px orange" }
            : null
        }
        onClick={() => chooseMetronomeFigure(0)}
      >
        <img src="../../icons/metronome1.png" alt="metronome icon" />
      </div>
      <div
        style={
          onFigure === 1
            ? { border: "2px solid cadetblue", boxShadow: "5px 5px orange" }
            : null
        }
        onClick={() => chooseMetronomeFigure(1)}
      >
        <div></div>
      </div>
    </div>
  );
};

export default MetroFigure;
