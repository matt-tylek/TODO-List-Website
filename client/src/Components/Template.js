//import React from "react";
import { createContext, useContext, useState } from 'react';
import "./Template.css";
import Modal from './Modal';
import Backdrop from './Backdrop';
import TaskList from './TaskList';

//info from https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
export const TasksContext = createContext({
    tasks: [],
    setTasks: () => {},
    setTask: (index, value) => {}
})

function Template(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [tasks, setTasks] = useState([]);
    const contextValue = {tasks, setTasks, setTask}
    const [newName, setNewName] = useState("");

    function setTask(index, value) {
        var newTasks = [...tasks]
        newTasks[index] = value
        setTasks(newTasks)
    }
    
    function addHandler() {
        console.log('Clicked!');
        //console.log(props.text)
        setModalIsOpen(true);
        document.getElementById("InputID").value = "";
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    //Adds a task and closes the modal
    function confirmModalHandler() {
       var newTask = {}
       newTask.name = newName
       newTask.checked = false
       addTask(newTask)
       closeModalHandler()
    }

    //A helper funciton to add a single task since the process is not intuitive
    function addTask(task) {
        //have to add in a certain way so the state works correctly
        setTasks(tasks.concat(task))
    }
    
    return ( 
        <TasksContext.Provider value={contextValue}>
            
            {/*info from https://freefrontend.com/bootstrap-to-do-lists/*/}
            <div className="row m-1 p-4">
                <div className="col">
                    <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                        <u id="test">My Todo-s</u>
                    </div>
                </div>
            </div>
            <div className="row m-1 p-3">
                <div className="col col-11 mx-auto">
                    <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                        <div className="col">
                            <input onChange={e => setNewName(e.target.value)} className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .." id="InputID"></input>
                        </div>
                        <div className="col-auto m-0 px-2 d-flex align-items-center">
                            <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                            <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                            <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                        </div>
                        <div className="col-auto px-0 mx-0 mr-2">
                            <div className='actions'>
                                <button className="btn btn-primary" data-toggle="modal" onClick={addHandler}>Add</button>
                            </div>
                            {modalIsOpen &&  <Modal onCancel={closeModalHandler} onConfirm={confirmModalHandler} />}
                            {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-1 p-3 px-5 justify-content-end">
                <div className="col-auto d-flex align-items-center">
                    <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                    <select className="custom-select custom-select-sm btn my-2" id="dropdowns">
                        <option value="all" selected>All</option>
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                        <option value="has-due-date">Has due date</option>
                    </select>
                </div>
                <div className="col-auto d-flex align-items-center px-1 pr-3">
                    <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                    <select className="custom-select custom-select-sm btn my-2" id="dropdowns">
                        <option value="added-date-asc" selected>Added date</option>
                        <option value="due-date-desc">Due date</option>
                    </select>
                    <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                    <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
                </div>
            </div>

            <div className="row mx-1 px-5 pb-3 w-80">
                <div className="col mx-auto">
                    <TaskList></TaskList>
                </div>
            </div>
        </TasksContext.Provider>
    );
}

export default Template