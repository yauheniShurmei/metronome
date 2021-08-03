import { useSelector, useDispatch } from "react-redux";
import classes from "./Tempo.module.css";
import * as actionsType from "../store/actions";

const Tempo = () => {
  const tempo = useSelector((state) => state.tempo);
  const dispatch = useDispatch();

  return (
    <div
      className={classes.tempoElement}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <label>TEMPO</label>
      <input
        type="number"
        value={tempo}
        min="1"
        max="240"
        onChange={(event) =>
          dispatch({
            type: actionsType.CHANGE_TEMPO,
            value: event.target.value,
          })
        }
      />
    </div>
  );
};

export default Tempo;
