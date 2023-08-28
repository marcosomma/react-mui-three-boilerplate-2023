import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE, SET_MESSAGE, SET_ROLE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";

const reducer = (state: State, action: DispatchArgs) => {
  let newState: State = JSON.parse(JSON.stringify(state));
  if(newState.mateToCreate && state.mateToCreate) newState.mateToCreate = {...newState.mateToCreate, voice: state.mateToCreate.voice};
  switch (action.type) {
    case ACTION_TEST:
      newState.test++;
      break;
    case SHOW_TOGGLE:
      newState.show = !state.show;
      break;
    case SET_VOICE:
      if(newState.mateToCreate) newState.mateToCreate= {...newState.mateToCreate, voice: action.payload};
      else newState.mateToCreate = {voice: action.payload};
      break;
      case SET_MESSAGE:
        newState.recordedText = action.payload;
        break;
      case SET_ROLE:
        if(newState.mateToCreate) newState.mateToCreate= {...newState.mateToCreate, role: action.payload};
        else newState.mateToCreate = {role: action.payload};
        break;
    default:
      break;
  }
  console.log(newState);
  return newState;
};

export default reducer;
