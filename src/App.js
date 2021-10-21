import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import Homepage from "./pages/Homepage";
import ShowResult from "./pages/ShowResult";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import OwnerLoginPage from "./pages/OwnerLoginPage";
import OwnerRegisterPage from "./pages/OwnerRegisterPage";

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
