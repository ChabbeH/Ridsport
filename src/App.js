import React from "react";
import "./shared/global/Global.css";
import { Routing } from "./routes/Routing";
import { NavigationHandler } from "./components/navigationbar/NavigationHandler";

function App() {
  return (
    <Routing>
      <NavigationHandler />
    </Routing>
  );
}

export default App;
