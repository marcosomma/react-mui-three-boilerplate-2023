import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE, SET_MESSAGE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface ExampleActions {
  test: GenericFunction;
  showToggler: GenericFunction;
  setVoice: GenericFunction;
  setMsg: GenericFunction;
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
  const setMsg = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: SET_MESSAGE,
      payload: args,
    });
  };

  return {
    test,
    showToggler,
    setVoice,
    setMsg,
  };
};

export default actions;
