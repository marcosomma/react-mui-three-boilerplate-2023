import { ReactElement } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import StateContextProvider from "./context/providers/State";
import UI from "./container/Landing";
import customTheme from "./assets/theme";
import "./App.css";

function App(): ReactElement {
  return (
    <>
      <StateContextProvider>
        <div id="mui-container">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={customTheme}>
              <UI />
            </ThemeProvider>
          </StyledEngineProvider>
        </div>
      </StateContextProvider>
    </>
  );
}

export default App;
