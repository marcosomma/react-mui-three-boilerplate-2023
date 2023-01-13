export type DispatchArgs = {
    type: string;
    payload: any;
  }
  
export type State = {
    test: number;
    test_color: string,
    show: boolean;
}

const initialState: State = {
    test: 0,
    test_color: "#" + Math.floor(Math.random() * 16777215).toString(16),
    show: false
};
export default initialState;
