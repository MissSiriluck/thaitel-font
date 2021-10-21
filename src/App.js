import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import { createStyles, makeStyles } from "@mui/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import RegisterContent from "./component/RegisterContent";
import LoginContent from "./component/LoginContent";
import OwnerResidentSec1 from "./component/OwnerRegister";
import TestBt from "./component/TestBt";
import OwnerRegister from "./component/OwnerRegister";
import OwnerLogin from "./component/OwnerLoginSec1";
import ResidentRegiterPage2 from "./component/ResidentRegiterPage2";
import { BrowserRouter,Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import showResult from "./pages/showResult";

function App() {

  const theme = createTheme({
    typography: {
      fontFamily: ['Noto Sans Thai', 'sans-serif'].join(","),
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <RegisterContent /> */}
        {/* <LoginContent /> */}
        {/* <OwnerRegister /> */}
        {/* <OwnerLogin /> */}
        <ResidentRegiterPage2 />
      </ThemeProvider>
      {/* <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/showResult" component={showResult} />
        </Switch>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
