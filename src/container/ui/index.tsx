import { useContext, useState, useEffect, ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import { Paper, Grid, Typography } from "@mui/material";
import { StateContext } from "../../context/providers/State";
import { getStyles } from "../../assets/theme/utils";
import { VoiceSelector } from "../../components/";
const styleClasses = getStyles.use_styles;

const Landing = ({ classes }: any): ReactElement => {
  const { state } = useContext(StateContext);
  const [speechRecognition, setSpeechRecognition] = useState(
    window.SpeechRecognition
      ? new window.SpeechRecognition()
      : new window.webkitSpeechRecognition()
  );
  const [speechSynthesis, setSpeechSynthesis] = useState(
    (window as any).speechSynthesis
  );
  const [utter, setUtter] = useState(new window.SpeechSynthesisUtterance());

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
      </Grid>
      <Grid item zeroMinWidth className={classes.footer}>
        <Paper elevation={0} className={classes.paper}>
          {state.footer}
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styleClasses)(Landing);
