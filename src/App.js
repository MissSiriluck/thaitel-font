import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ConfirmInfoPage from "./pages/ConfirmInfoPage";
import Homepage from "./pages/Homepage";
import showResult from "./pages/showResult";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

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
          <Route exact path='/showResult' component={showResult} />
          <Route
            exact
            path='/BookingConfirmation'
            component={BookingConfirmationPage}
          />
          <Route exact path='/ConfirmInformation' component={ConfirmInfoPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
