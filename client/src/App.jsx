//<<<<<<< HEAD
//import React from "react";
//import logo from "./logo.svg";
//=======
import React, { useState } from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CompletedTaskView from "./Components/CompletedTaskView.js";
import AllViews from "./Components/ADifferentView.js";
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
      <Router>
        <footer>
      <NavbarPage login={login}>  </NavbarPage>
      <header className="App-header">
      <Switch>
         <Route path="/All">
         <Template className="template">
  

              {loginModalIsOpen && <LoginModal onCancel={closeLoginModalHandler}/>}
              {loginModalIsOpen && <Backdrop onCancel={closeLoginModalHandler}/>} 
         </Template>
         </Route>

    <Route path="/Completed"> <CompletedTaskView></CompletedTaskView></Route>

  </Switch>
        {/*<TaskList tasks="tasks"></TaskList>*/}
      </header>
      </footer>
      </Router>
    </div>
  );
}


