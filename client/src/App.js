import "./App.css";
import Appbar from "./components/Appbar";
import Hostels from "./components/Hostels";
import HostelState from "./context/HostelState";
import AuthState from "./context/AuthState";
import { Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <HostelState>
        <AuthState>
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

          <Footer />
        </AuthState>
      </HostelState>
    </>
  );
}

export default App;
