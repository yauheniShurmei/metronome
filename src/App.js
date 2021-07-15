import MainScreen from "./MainScreen/MainScreen";

import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainScreen />
      </Provider>
    </div>
  );
}

export default App;
