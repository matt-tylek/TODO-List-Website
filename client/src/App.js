import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <Task name="Test Checkbox" checked="false"></Task>
      </header>
    </div>
  );
}

export default App;
