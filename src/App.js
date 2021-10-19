import { BrowserRouter,Switch, Route } from "react-router-dom";
import "./App.css";
import showResult from "./pages/showResult";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={showResult} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
