import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ConfirmInfoPage from "./pages/ConfirmInfoPage";
import Homepage from "./pages/Homepage";
import ShowResultPage from "./pages/ShowResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OwnerLoginPage from "./pages/OwnerLoginPage";
import OwnerRegisterPage from "./pages/OwnerRegisterPage";
import ShowResult from "./pages/showResult";

import ResidentRegiterPage2Page from "./pages/ResidentRegiterPage2Page";
import ResidentRegiterPage3Page from "./pages/ResidentRegiterPage3Page";
import ResidentRegisterPage4Page from "./pages/ResidentRegisterPage4Page";
import ResidentRegisterPage5Page from "./pages/ResidentRegisterPage5Page";
import ResidentRegisterPage6Page from "./pages/ResidentRegisterPage6Page";
import ResidentRegisterPage7Page from "./pages/ResidentRegisterPage7Page";
import ResidentRegisterPage8Page from "./pages/ResidentRegisterPage8Page";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans Thai", "sans-serif"].join(","),
    },
  });

  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/register' component={RegisterPage} />
          <Route exact path='/ownerlogin' component={OwnerLoginPage} />
          <Route exact path='/ownerregister' component={OwnerRegisterPage} />
          <Route exact path='/mainmenu' component={ShowResultPage} />
          <Route
            exact
            path='/BookingConfirmation'
            component={BookingConfirmationPage}
          />
          <Route exact path='/ConfirmInformation' component={ConfirmInfoPage} />
          <Route
            exact
            path='/residentregisterpage2'
            component={ResidentRegiterPage2Page}
          />
          <Route
            exact
            path='/residentregisterpage3'
            component={ResidentRegiterPage3Page}
          />
          <Route
            exact
            path='/residentregisterpage4'
            component={ResidentRegisterPage4Page}
          />
          <Route
            exact
            path='/residentregisterpage5'
            component={ResidentRegisterPage5Page}
          />
          <Route
            exact
            path='/residentregisterpage6'
            component={ResidentRegisterPage6Page}
          />
          <Route
            exact
            path='/residentregisterpage7'
            component={ResidentRegisterPage7Page}
          />
          <Route
            exact
            path='/residentregisterpage8'
            component={ResidentRegisterPage8Page}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
