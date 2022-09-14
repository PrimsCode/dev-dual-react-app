import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";

function App() {

 
 // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser()
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
    </Router>
  );
}

export default App;
