import { State, DispatchArgs } from "../providers/initialState";
import example, { ExampleActions } from "./example";
export interface ActionsCollections {
  example?: ExampleActions;
}

const actionsCollection = (
  dispatch: React.Dispatch<DispatchArgs>,
  state: State,
  props: any
) => {
  return {
    example: example(dispatch, state, props),
  };
};

export default actionsCollection;
