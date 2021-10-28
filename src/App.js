import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import routes from "./config/route";

function App() {
  const { user } = useContext(AuthContext);
  const role = user ? user.role : "guest";

  // console.log("role...................", role);
  console.log("user...................", user);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {routes[role].map((item, idx) =>
            item.redirect ? (
              <Redirect key={idx.item} to={item.redirect} />
            ) : (
              <Route
                key={item.path}
                exact
                path={item.path}
                component={item.component}
              />
            )
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
