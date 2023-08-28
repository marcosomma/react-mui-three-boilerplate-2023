import {
  useContext,
  useState,
  useEffect,
  ReactElement,
  ChangeEvent,
} from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Select,
  InputLabel,
  FormControl,
  NativeSelect,
  SelectChangeEvent,
} from "@mui/material";
import { StateContext } from "../context/providers/State";
import { getStyles } from "../assets/theme/utils";
const styleClasses = getStyles.use_styles;

const VoiceSelector = ({ classes }: any): ReactElement => {
  const { state, actionsCollection } = useContext(StateContext);
  const [voiceList, setVoiceList] = useState(
    window.speechSynthesis.getVoices()
  );
  const [voice, setVoice] = useState("0");

  useEffect(() => {
    if (voiceList.length === 0) {
      setVoiceList(
        window.speechSynthesis.getVoices().sort((a, b) => {
          if (a.lang < b.lang) {
            return -1;
          }
          if (a.lang > b.lang) {
            return 1;
          }
          return 0;
        })
      );
    }
    if (actionsCollection.example) {
      actionsCollection.example.setVoice(voiceList[Number(voice)]);
    }
  }, [voiceList]);

  const handleChange = (event: any) => {
    console.log(event.target.value);
    setVoice(event.target.value);
    // actionsCollection.setVoice()
    if (actionsCollection.example) {
      actionsCollection.example.setVoice(voiceList[Number(event.target.value)]);
    }
  };
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 340 }}>
      <InputLabel variant="standard" htmlFor="uncontrolled-native">
        Select a voice
      </InputLabel>
      <NativeSelect
        defaultValue={voice}
        inputProps={{
          name: "voice",
          id: "uncontrolled-native",
        }}
        onChange={handleChange}
      >
        {voiceList.map((vOpt, i) => (
          <option value={i} key={`voice-${i}`}>
            {vOpt.lang} - {vOpt.name}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default withStyles(styleClasses)(VoiceSelector);
