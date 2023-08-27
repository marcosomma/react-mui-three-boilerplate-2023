import { useContext, ReactElement } from "react";
import withStyles from "@mui/styles/withStyles";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import {
  Paper,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  FormControlLabel,
  Switch,
  Divider,
} from "@mui/material";
import { SketchPicker } from "react-color";
import { StateContext } from "../../context/providers/State";
import { getStyles } from "../../assets/theme/utils";
const ColorButton = styled(Button)<ButtonProps>(({ theme }) =>
  getStyles.make_style(theme)
);
const styleClasses = getStyles.use_styles;
function UiContainer({ classes }: any): ReactElement {
  const { state, actionsCollection } = useContext(StateContext);
  return (
    <Grid container spacing={5} direction="column">
      <Grid item className={classes.header}>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h4" color="primary">
            TypeScript / React / ReactHooks / Material-UI / ThreeJS
          </Typography>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.body}>
        <Paper elevation={0} className={classes.paper}>
          <Card sx={{ maxWidth: 320 }}>
            <CardContent>
              <Typography variant="body2">
                This Material UI component is interacting with the ThreeJS
                Canvas.
              </Typography>
              <Typography variant="body2" style={{ marginTop : 10, fontSize: 10}}>
                Every time you click this button a new complex object will be
                added to the scene.
              </Typography>
              <ColorButton
                onClick={() => {
                  if (actionsCollection.example)
                    actionsCollection.example.test({ sd: "aa" });
                }}
                style={{ pointerEvents: "auto", margin: "10px auto" }}
                variant="contained"
              >
                Click me
              </ColorButton>
            </CardContent>
            <Divider orientation="horizontal" variant="fullWidth" />
            <Typography variant="overline" style={{ marginLeft: 10 }}>
              {state.test} objects in the scene
            </Typography>
            <Divider orientation="horizontal" variant="fullWidth" />
            <CardActions
              style={{
                pointerEvents: "auto",
                flexDirection: "column",
                float: "left",
              }}
            >
              <FormControlLabel
                control={
                  <Switch
                    inputProps={{ "aria-label": "TEST" }}
                    value={state.show}
                    onChange={() => {
                      if (actionsCollection.example)
                        actionsCollection.example.showToggler();
                    }}
                  />
                }
                labelPlacement="top"
                label="Numbers visible"
                slotProps={{
                  typography: {
                    style: { fontSize: 12 },
                  },
                }}
              />
            </CardActions>
            <CardActions
              style={{
                pointerEvents: "auto",
                flexDirection: "column",
                float: "left",
              }}
            >
              <FormControlLabel
                control={
                  <div style={{ paddingTop: 10, display: "block" }}>
                    <SketchPicker
                      color={state.test_color}
                      onChangeComplete={({ hex }: { hex: string }) => {
                        if (actionsCollection.example)
                          actionsCollection.example.setColor(hex);
                      }}
                    />
                  </div>
                }
                labelPlacement="top"
                label="Objects color"
                slotProps={{
                  typography: {
                    style: { fontSize: 12, width: '100%' },
                  },
                }}
              />
            </CardActions>
          </Card>
        </Paper>
      </Grid>
      <Grid item zeroMinWidth className={classes.footer}>
        <Paper elevation={0} className={classes.paper}></Paper>
      </Grid>
    </Grid>
  );
}

export default withStyles(styleClasses)(UiContainer);
