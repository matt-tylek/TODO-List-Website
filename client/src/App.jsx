//<<<<<<< HEAD
//import React from "react";
//import logo from "./logo.svg";
//=======
import React, { useState } from "react";
//>>>>>>> refs/remotes/origin/main
import "./App.css";
//import "./Components/Menubar.js";
import NavbarPage from "./Components/Menubar";
import TaskList from "./Components/TaskList";
import Template from "./Components/Template";
import Backdrop from "./Components/Backdrop";
import { LoginModal } from "./Components/LoginModal";

/*
var templateTasks = [
  {name: "Task 1", checked: false},
  {name: "Take out laundry", checked: false},
  {name: "not do anythin", checked: true}
]*/

export default function App() {
  /*
  const [data, setData] = React.useState(null);

  //if you want to append an item, you have to do the following
  // setTasks(tasks.concat(new item))
  const [tasks, setTasks] = React.useState(templateTasks)

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);*/

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);

  function closeLoginModalHandler() {
    setLoginModalIsOpen(false);
  }

  function login() {
    setLoginModalIsOpen(true);
  }

  return (
    <div className="App">
      <NavbarPage login={login}>  </NavbarPage>
      <header className="App-header">
        <Template className="template">
          <h1>Hellowd</h1>
          {loginModalIsOpen && <LoginModal onCancel={closeLoginModalHandler}/>}
          {loginModalIsOpen && <Backdrop onCancel={closeLoginModalHandler}/>} 
        </Template>

        
        {/*<TaskList tasks="tasks"></TaskList>*/}
      </header>
    </div>
  );
}


