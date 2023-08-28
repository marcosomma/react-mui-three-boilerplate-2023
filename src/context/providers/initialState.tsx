declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
    SpeechSynthesisUtterance: any;
  }
}

export type DispatchArgs = {
  type: string;
  payload: any;
};

export type Role = {
  key: number;
  label: string;
};

export type Mate = {
  name?: string;
  voice?: any;
  role?: Role;
};

export type State = {
  test: number;
  title: string;
  footer: string;
  show: boolean;
  recordedText?: string;
  roleList: Array<Role>;
  mates?: Array<Mate>;
  mateToCreate?: Mate;
};

const initialState: State = {
  test: 0,
  title: "mAI-company prototype",
  footer: "by @marcosomma",
  show: false,
  roleList: [{key:0, label:"Marketing expert"}, {key:1, label:"Sales expert"}, {key:2, label:"Customer service expert"}, {key:3, label:"IT expert"}, {key:4, label:"Operations expert"}],
  recordedText: "123 Check 123",
};
export default initialState;
