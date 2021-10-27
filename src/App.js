import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ConfirmInfoPage from "./pages/ConfirmInfoPage";
import Homepage from "./pages/Homepage";
import ShowResultPage from "./pages/ShowResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OwnerLoginPage from "./pages/OwnerLoginPage";
import OwnerRegisterPage from "./pages/OwnerRegisterPage";
import ResidentRegisterPage2Page from "./pages/ResidentRegisterPage2Page";
import ResidentRegisterPage3Page from "./pages/ResidentRegisterPage3Page";
import ResidentRegisterPage4Page from "./pages/ResidentRegisterPage4Page";
import ResidentRegisterPage5Page from "./pages/ResidentRegisterPage5Page";
import ResidentRegisterPage6Page from "./pages/ResidentRegisterPage6Page";
import ResidentRegisterPage7Page from "./pages/ResidentRegisterPage7Page";
import ResidentRegisterPage8Page from "./pages/ResidentRegisterPage8Page";
import AddCom from "./pages/AddCom";
import UserHistoryPage from "./pages/UserHistoryPage";
import OwnerHistoryPage from "./pages/OwnerHistoryPage";
import OwnerDetailPage from "./pages/OwnerDetailPage";

function App() {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: ["Noto Sans Thai", "sans-serif"].join(","),
  //   },
  // });

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
          <Route exact path='/addcom' component={AddCom} />
          <Route exact path='/history' component={UserHistoryPage} />
          <Route exact path='/ownerhistory' component={OwnerHistoryPage} />
          <Route exact path='/ownerdetail' component={OwnerDetailPage} />
          <Route
            exact
            path='/BookingConfirmation'
            component={BookingConfirmationPage}
          />
          <Route exact path='/ConfirmInformation' component={ConfirmInfoPage} />
          <Route
            exact
            path='/residentregisterpage2'
            component={ResidentRegisterPage2Page}
          />
          <Route
            exact
            path='/residentregisterpage3'
            component={ResidentRegisterPage3Page}
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
