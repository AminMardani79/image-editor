// components
import AppComponent from "./components/AppComponent";
// context
import LightModeContextProvider from "./context/LightModeContextProvider";
import AdjusmentContextProvider from "./context/AdjusmentContextProvider";
function App() {
  return (
    <LightModeContextProvider>
      <AdjusmentContextProvider>
        <AppComponent />
      </AdjusmentContextProvider>
    </LightModeContextProvider>
  );
}

export default App;
