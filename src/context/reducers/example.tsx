import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ACTION_TEST:
      newState.test++;
      return newState;
    case SHOW_TOGGLE:
      newState.show = !state.show;
      return newState;
    case SET_VOICE:
      newState.voice = action.payload;
      return newState;
    default:
      return state;
  }
};

export default reducer;
