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

export type State = {
  test: number;
  title: string;
  footer: string;
  show: boolean;
  voice?: any;
  recordedText?: string;
};

const initialState: State = {
  test: 0,
  title: "mAI-company prototype",
  footer: "by @marcosomma",
  show: false,
};
export default initialState;
