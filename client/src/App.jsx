//<<<<<<< HEAD
//import React from "react";
//import logo from "./logo.svg";
//=======
import React, { createContext, useState } from "react";

import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import CompletedTaskView from "./Components/CompletedTaskView.js";
import AllViews from "./Components/ADifferentView.js";
import IncompleteTasksView from "./Components/IncompleteTasksView.js";
//>>>>>>> refs/remotes/origin/main
import "./App.css";
//import "./Components/Menubar.js";
import NavbarPage from "./Components/Menubar";
import TaskList from "./Components/TaskList";
import Template from "./Components/Template";
import Backdrop from "./Components/Backdrop";
import Register from "./Components/Register.js";
import { LoginModal } from "./Components/LoginModal";
import {logout, saveTasks, getTasks} from "./firebase";


/*
var templateTasks = [
  {name: "Task 1", checked: false},
  {name: "Take out laundry", checked: false},
  {name: "not do anythin", checked: true}
]*/

export const UserContext = createContext({
  user: () => {},
  setUser: (user) => {}
})

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
  const [user, baseSetUser] = useState(null);
  const[tasks, baseSetTasks] = useState([]);

  function closeLoginModalHandler() {
    setLoginModalIsOpen(false);
  }

  function login() {
    setLoginModalIsOpen(true);
  }

  function localLogout() {
    logout(() => setUser(null))
  }

  //Task related functions
  function setTasks(tasks) {
    saveTasks(tasks)
    baseSetTasks(tasks)
  }

  function setUser(user) {
    baseSetUser(user)
    getTasks().then((result) => {
      if (result.tasks != null) {
        baseSetTasks(result.tasks)
      } else {
        baseSetTasks([])
      }
    })
  }

  
 
  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className="App">
            <Router>
              <footer>
            <NavbarPage login={login} logout={localLogout}>  </NavbarPage>
            <header className="App-header">
            <Switch>

              <Route path="/Completed"> <CompletedTaskView></CompletedTaskView></Route>
              <Route path="/register"><Register></Register></Route>
              <Route path="/">
              <Template className="template" tasks={tasks} setTasks={setTasks}>
        

                    {loginModalIsOpen && <LoginModal onCancel={closeLoginModalHandler}/>}
                    {loginModalIsOpen && <Backdrop onCancel={closeLoginModalHandler}/>} 
              </Template>
              </Route>

        </Switch>
              {/*<TaskList tasks="tasks"></TaskList>*/}
            </header>
            </footer>
            </Router>
          </div>
    </UserContext.Provider>
    
  );
}


