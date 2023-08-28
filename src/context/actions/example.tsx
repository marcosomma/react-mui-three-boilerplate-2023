import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface ExampleActions {
  test: GenericFunction;
  showToggler: GenericFunction;
  setVoice: GenericFunction;
}
type GenericFunction = (params?: any) => void;

const actions = (
  dispatch: React.Dispatch<DispatchArgs>,
  state: State,
  props: any
) => {
  const test = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: ACTION_TEST,
      payload: { ...args },
    });
  };
  const showToggler = () => {
    dispatchAndLogEvent(dispatch, {
      type: SHOW_TOGGLE,
      payload: null,
    });
  };
  const setVoice = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: SET_VOICE,
      payload: args,
    });
  };

  return {
    test,
    showToggler,
    setVoice,
  };
};

export default actions;
