import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ConfirmInfoPage from "./pages/ConfirmInfoPage";
import Homepage from "./pages/Homepage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OwnerLoginPage from "./pages/OwnerLoginPage";
import OwnerRegisterPage from "./pages/OwnerRegisterPage";
import ShowResult from "./pages/showResult";

import ResidentRegiterPage2Page from "./pages/ResidentRegiterPage2Page";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Noto Sans Thai", "sans-serif"].join(","),
    },
  });

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/ownerlogin" component={OwnerLoginPage} />
          <Route exact path="/ownerregister" component={OwnerRegisterPage} />
          <Route exact path="/showresult" component={ShowResult} />
          <Route
            exact
            path="/BookingConfirmation"
            component={BookingConfirmationPage}
          />
          <Route exact path="/ConfirmInformation" component={ConfirmInfoPage} />
          <Route exact path="/residentregisterpage2" component={ResidentRegiterPage2Page} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
