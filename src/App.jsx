import "./App.css";
import FirstView from ".//components/FirstView";
import SecondView from "./components/SecondView";

function App() {
  return (
    <>
      {/* First view with shiny gradient background */}
      <FirstView />

      {/* Second view with shiny white background */}
      <SecondView />
    </>
  );
}

export default App;