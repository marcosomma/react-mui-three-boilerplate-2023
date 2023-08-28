import { useContext, useState, useEffect, ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Select,
  MenuItem,
  FormControl,
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
  }, [voiceList]);

  const handleChange = (event: SelectChangeEvent) => {
    setVoice(event.target.value as string);
    // actionsCollection.setVoice()
    if (actionsCollection.example) {
      console.log(Number(event.target.value))
      console.log(voiceList[Number(event.target.value)])
      actionsCollection.example.setVoice(voiceList[Number(event.target.value)]);
    }
  };
  return (
    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
      <Select
        labelId="voice-selector-label"
        id="voice-selector"
        value={voice}
        label="Voice"
        onChange={handleChange}
      >
        {voiceList.map((vOpt, i) => (
            <MenuItem key={i} value={`${i}`}>
              {vOpt.lang} - {vOpt.name}
            </MenuItem>
          )
        )}
      </Select>
    </FormControl>
  );
};

export default withStyles(styleClasses)(VoiceSelector);
