import { ACTION_TEST, SHOW_TOGGLE, SET_VOICE, SET_MESSAGE, SET_ROLE } from "../_types";
import { State, DispatchArgs } from "../providers/initialState";
import { dispatchAndLogEvent } from "./_logger";
export interface ExampleActions {
  test: GenericFunction;
  showToggler: GenericFunction;
  setVoice: GenericFunction;
  setMsg: GenericFunction;
  setRole: GenericFunction;
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
  const setRole = (args: any) => {
    dispatchAndLogEvent(dispatch, {
      type: SET_ROLE,
      payload: args,
    });
  };

  return {
    test,
    showToggler,
    setVoice,
    setMsg,
    setRole
  };
};

export default actions;
