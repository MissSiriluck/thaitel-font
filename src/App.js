import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import ConfirmInfoPage from "./pages/ConfirmInfoPage";
import Homepage from "./pages/Homepage";
import showResult from "./pages/showResult";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Homepage} />
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
