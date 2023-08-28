import { useContext, useState, useEffect, ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { StateContext } from "../../context/providers/State";
import { getStyles } from "../../assets/theme/utils";
import { VoiceSelector } from "../../components/";
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
  const [recording, setRecorded] = useState(false);
  const handleRecording = () => {
    console.log("recording");

    speechRecognition.onspeechend = function () {
      speechRecognition.stop();
    };
    speechRecognition.onresult = function (event: any) {
      console.log("Recognition response:", event);
      const inputText =
        event.results && event.results[0][0].transcript
          ? event.results[0][0].transcript
          : null;
      if (actionsCollection.example && inputText !== "") {
        actionsCollection.example.setMsg(inputText);
      }
    };
    speechRecognition.lang = state.voice.lang;
    speechRecognition.start();
  };
  const handlePlay = () => {
    console.log("Play", state.recordedText, "using voice:", state.voice.name);
    if (speechSynthesis.speaking) {
      console.error("speechSynthesis.speaking");
      return;
    }

    if (state.recordedText !== "" && state.voice) {
      utter.text = state.recordedText;
      utter.onend = function (event: any) {
        console.log("SpeechSynthesisUtterance.onend");
      };
      utter.onerror = function (event: any) {
        console.error("SpeechSynthesisUtterance.onerror");
      };
      utter.voice = state.voice;
      utter.lang = state.voice.lang;
      speechSynthesis.speak(utter);
    }
  };

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
          <VoiceSelector />
        </Paper>
        <Paper elevation={0} className={classes.paper}>
          <Button
            variant="contained"
            disabled={recording}
            onClick={handleRecording}
          >
            Rec
          </Button>
          <Button
            variant="outlined"
            disabled={!state.recordedText || state.recordedText === ""}
            onClick={handlePlay}
          >
            Play
          </Button>
        </Paper>
        <Paper
          style={{
            margin: 10,
            background: "lightblue",
            padding: 10,
          }}
          elevation={0}
        >
          {state.recordedText}
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
