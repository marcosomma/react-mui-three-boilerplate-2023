import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE, SET_MESSAGE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  newState.voice = state.voice;
  switch (action.type) {
    case ACTION_TEST:
      newState.test++;
      break;
    case SHOW_TOGGLE:
      newState.show = !state.show;
      break;
    case SET_VOICE:
      newState.voice = action.payload;
      break;
    case SET_MESSAGE:
      newState.recordedText = action.payload;
      break;
    default:
      break;
  }
  console.log(newState);
  return newState;
};

export default reducer;
