import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//components
import { Navbar } from "./components";
import Home from "./components/Home";
import Inspect from "./components/Inspect";
import Duel from "./components/Duel";

function App() {

  return (
    <Router>
      <GlobalStyles />
      <Navbar />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/duel">
          <Duel />
        </Route> 
        <Route path="/inspect">
          <Inspect />
        </Route>  

      </Switch>
    </Router>
  );
}

export default App;
