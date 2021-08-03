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
    <section className={classes.rootSection}>
      <div className={classes.labelFigure}>FIGURE</div>
      <div
        className={classes.metronomeFigure}
        style={
          onFigure === 0
            ? { border: "2px solid cadetblue", boxShadow: "5px 5px orange" }
            : null
        }
        onClick={() => chooseMetronomeFigure(0)}
      >
        <img src="../../icons/metronome1.png" alt="metronome icon" />
      </div>
      {/* <div
        className={classes.squareFigure}
        style={
          onFigure === 1
            ? { border: "2px solid cadetblue", boxShadow: "5px 5px orange" }
            : null
        }
        onClick={() => chooseMetronomeFigure(1)}
      >
        <div></div>
      </div> */}
    </section>
  );
};

export default MetroFigure;
