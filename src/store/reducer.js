import * as actionTypes from "./actions";

const initialState = {
  timeSignature: 1,
  tempo: 60,
  onFigure: 0,
  isPlay: false,
  isLeft: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHOOSE_TIMESIGNATURE:
      console.log("CHOOSE_TIMESIGNATURE", action.value);
      return {
        ...state,
        timeSignature: action.value,
        isPlay: false,
      };
    case actionTypes.CHANGE_TEMPO:
      console.log("CHANGE_TEMPO", action.value);
      return {
        ...state,
        tempo: action.value,
        isPlay: false,
      };
    case actionTypes.CHOOSE_FIGURE:
      console.log("CHOOSE_FIGURE", action.value);
      return {
        ...state,
        onFigure: action.value,
      };
    case actionTypes.ISPLAY:
      console.log("ISPLAY", action.value);
      return {
        ...state,
        isPlay: action.value,
      };
    default:
      return state;
  }
};

export default reducer;
