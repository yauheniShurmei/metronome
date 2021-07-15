import TimeSignature from "../TimeSignature/TimeSignature";
import MetroElement from "../MetroElement/MetroElement";
import NavBar from "../NavBar/NavBar";
import Start from "../Start/Start";

const MainScreen = () => {
  return (
    <div>
      <NavBar />
      <TimeSignature />
      <MetroElement />
      <Start />
    </div>
  );
};

export default MainScreen;
