import "./App.css";
import Appbar from "./components/Appbar";
import Hostels from "./components/Hostels";
import HostelState from "./context/HostelState";
function App() {
  return (
    <>
      <HostelState>
        <Appbar />

        <Hostels />
      </HostelState>
    </>
  );
}

export default App;
