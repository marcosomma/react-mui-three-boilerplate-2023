import { useContext, useState, useEffect, ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import {
  Paper,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { StateContext } from "../../context/providers/State";
import { getStyles } from "../../assets/theme/utils";
const styleClasses = getStyles.use_styles;

function Landing({ classes }: any): ReactElement {
  const { state, actionsCollection } = useContext(StateContext);
  const [speechRecognition, setSpeechRecognition] = useState(
    window.SpeechRecognition
      ? new window.SpeechRecognition()
      : new window.webkitSpeechRecognition()
  );
  const [speechSynthesis, setSpeechSynthesis] = useState(
    (window as any).speechSynthesis
  );
  const [utter, setUtter] = useState(new window.SpeechSynthesisUtterance());
  const [voiceList, setVoiceList] = useState(
    window.speechSynthesis.getVoices()
  );
  const [voice, setVoice] = useState("0");

  useEffect(() => {
    console.log("enter");
    if (voiceList.length === 0) {
      setVoiceList(window.speechSynthesis.getVoices());
    }
  }, [voiceList]);

  const handleChange = (event: SelectChangeEvent) => {
    setVoice(event.target.value as string);
  };
  console.log("speechRecognition", speechRecognition);
  console.log("speechSynthesis", speechSynthesis);
  console.log("utter", utter);
  console.log("liqqqqqqst", voiceList);
  return (
    <Grid container spacing={1} direction="column">
      <Grid item className={classes.header}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h3" color="primary">
            {state.title}
          </Typography>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.body}>
        <Paper elevation={0} className={classes.paper}>
          <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
            <Select
              labelId="voice-selector-label"
              id="voice-selector"
              value={voice}
              label="Voice"
              onChange={handleChange}
            >
              {voiceList
                .sort((a, b) => {
                  if (a.lang < b.lang) {
                    return -1;
                  }
                  if (a.lang > b.lang) {
                    return 1;
                  }
                  return 0;
                })
                .map((vOpt, i) => {
                  console.log(i, vOpt);
                  return (
                    <MenuItem key={i} value={`${i}`}>
                      {vOpt.lang} - {vOpt.name}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.footer}>
        <Paper elevation={0} className={classes.paper}>
          {state.footer}
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styleClasses)(Landing);
