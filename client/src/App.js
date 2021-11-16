import "./App.css";
import Appbar from "./components/Appbar";
import Hostels from "./components/Hostels";
import HostelState from "./context/HostelState";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  return (
    <>
      <HostelState>
        <Appbar />
        <Route exact path="/Home">
          <Hostels />
        </Route>
        <Route exact path="/">
          <Hostels />
        </Route>
        <Route exact path="/Signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </HostelState>
    </>
  );
}

export default App;
