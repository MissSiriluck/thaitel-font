import { BrowserRouter,Switch, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import showResult from "./pages/showResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/showResult" component={showResult} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
