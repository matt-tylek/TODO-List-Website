import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Components/Menubar.js";
import NavbarPage from "./Components/Menubar";

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
        <NavbarPage>  </NavbarPage>
      </header>
    </div>
  );
}

export default App;
