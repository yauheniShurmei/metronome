import classes from "./MetroElement.module.css";
import { useSelector } from "react-redux";
import Tempo from "../Tempo/Tempo";
import MetroFigure from "../MetroFigure/MetroFigure";
import { useEffect, useState } from "react";
import MetronomeStandart from "../MetronomeStandart/MetronomeStandart";
import useSound from "use-sound";
import metroSound from "../sounds/metronome_sound.mp3";
import MetronomeSquare from "../MetronomeSquare/MetronomeSquare";
import classicSound from "../sounds/Classic_Metronome.wav";

const MetroElement = (props) => {
  const timeSignatures = useSelector((state) => state.timeSignature);
  const onFigure = useSelector((state) => state.onFigure);
  const isPlay = useSelector((state) => state.isPlay);
  const tempo = useSelector((state) => state.tempo);
  const [isLeft, setIsLeft] = useState(false);
  const [play] = useSound(metroSound);
  const [playClassicSound] = useSound(classicSound);
  let [counter, setCounter] = useState(0);

  let elements = null;
  const secundsToOneBit = (60 / tempo) * 1000;

  switch (onFigure) {
    case 0:
      elements = (
        <MetronomeStandart
          isLeft={isLeft}
          isPLay={isPlay}
          tempo={tempo}
          secundsToOneBit={secundsToOneBit}
        />
      );
      break;
    case 1:
      elements = (
        <MetronomeSquare
          counter={counter % 4}
          isPLay={isPlay}
          tempo={tempo}
          secundsToOneBit={secundsToOneBit}
        />
      );
      break;
    default:
      break;
  }

  useEffect(() => {
    let counter = 0;
    if (isPlay) {
      const interval = setInterval(() => {
        switch (timeSignatures) {
          case 1:
            play();
            setIsLeft((isLeft) => !isLeft);
            counter += 1;
            setCounter((counter) => counter + 1);
            break;
          case 2:
            counter % 2 === 0 ? playClassicSound() : play();
            counter += 1;
            setCounter((counter) => counter + 1);
            setIsLeft((isLeft) => !isLeft);
            break;
          case 3:
            counter % 3 === 0 ? playClassicSound() : play();
            counter += 1;
            setCounter((counter) => counter + 1);
            setIsLeft((isLeft) => !isLeft);
            break;
          case 4:
            counter % 4 === 0 ? playClassicSound() : play();
            counter += 1;
            setCounter((counter) => counter + 1);
            setIsLeft((isLeft) => !isLeft);
            break;
          default:
            break;
        }
      }, secundsToOneBit);

      return () => clearInterval(interval);
    }
  }, [isPlay]);

  return (
    <div className={classes.metro_element_root}>
      <div className={classes.tempo_figure_element}>
        <Tempo />
        <MetroFigure />
      </div>
      <div className={classes.metronome_place}>{elements}</div>
    </div>
  );
};

export default MetroElement;
