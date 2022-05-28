// components
import Navbar from "./components/Navbar";
import Content from "./components/Content";
// context
import LightModeContextProvider from "./context/LightModeContextProvider";
function App() {
  return (
    <LightModeContextProvider>
      <div className="App">
        <Navbar />
        <Content />
      </div>
    </LightModeContextProvider>
  );
}

export default App;
