import "./App.css";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Home from "./component/Home";
import { store, persistor } from "./store/store";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
