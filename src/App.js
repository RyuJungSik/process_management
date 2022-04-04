import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./Router";
import { useState } from "react";
function App() {
  const [flags, setFlags] = useState({
    flag1: 0,
    flag2: 0,
    flag3: 0,
    flag4: 0,
    flag5: 0,
    flag6: 0,
  });
  return (
    <div className="App">
      <h1>Process Magement</h1>
      <AppRouter flags={flags} setFlags={setFlags} />
    </div>
  );
}

export default App;
