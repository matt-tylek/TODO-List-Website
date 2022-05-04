//import React from "react";
import { createContext, useContext, useEffect, useState } from 'react';
import "./Template.css";
import Modal from './Modal';
import Backdrop from './Backdrop';
import TaskList from './TaskList';
import { InfoModal } from './InfoModal';
import { saveTasks } from '../firebase';

//info from https://stackoverflow.com/questions/41030361/how-to-update-react-context-from-inside-a-child-component
export const TasksContext = createContext({
    tasks: () => {},
    setTasks: () => {},
    setTask: (index, value) => {},
    viewTask: (task) => {}
})

function Template(props) {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [ infoModalIsOpen, setInfoModalIsOpen ] = useState([false, {}]);
    const [dueDates, setDueDates] = useState([]); //had to create a copy of "tasks" array for the "Due date" filter
    const contextValue = {getTasks, setTasks, setTask, viewTask, deleteTask, setDueDate}
    const [newName, setNewName] = useState("");
    const [filter, setFilter] = useState("") //getter and setter

    var newTasks = [...props.tasks]
    var dueDateSort = [...dueDates]
    function setTask(index, value) {
        newTasks[index] = value
        setTasks(newTasks)
    }
    function setDueDate(index, value){
        dueDateSort[index] = value
        setTasks(dueDateSort)
    }
    function setTasks(tasks) {
        props.setTasks(tasks)
    }

    function viewTask(task) {
        setInfoModalIsOpen([true, task])
    }
    function deleteTask(task){
        //info to remove a task from an array: https://www.mywebtuts.com/blog/react-native-remove-item-from-array-example
        newTasks.splice(newTasks.indexOf(task), 1);
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
    function confirmModalHandler(task) {
        var newTask = task
        newTask.name = newName
        newTask.checked = false
        newTask.filterState = "0"

       addTask(newTask)
       addDueDateTask(newTask)
       closeModalHandler()
    }

    function closeInfoModalHandler() {
        setInfoModalIsOpen([false, {}])
    }

    //A helper function to add a single task since the process is not intuitive
    function addTask(task) {
        //have to add in a certain way so the state works correctly
        setTasks(props.tasks.concat(task))
    }
    function addDueDateTask(task){
        setDueDates(dueDateSort.concat(task))
    }

    function getTasks(){
        var result = []
        const tasks = props.tasks

        for(let i = 0; i < tasks.length; i++) {  //for each loop
            if(filter == "completed"){ //check if the filter is set to "Completed"
                tasks[i].filterState = "0"
                if(tasks[i].checked){
                    result.push(tasks[i])
                }
            }
            else if(filter == "active"){ //check if the filter is set to "Active"
                tasks[i].filterState = "0"
                if(!tasks[i].checked){
                    result.push(tasks[i])
                }
            }
            else if(filter == "dueDate"){ //check if the filter is set to "Due date"
                //"dueDates" is the same as "tasks" (had to create a new const and state so that the other filters are not messed up)
                for(let j = 0; j <  dueDates.length-i-1; j++){ //bubble sort
                    var date1 = new Date(dueDates[j + 1].date)
                    var date2 = new Date(dueDates[j].date)
                    if(date1 - date2 < 0){ //Negative -	date1 before date2
                        var tmp = dueDates[j];
                        dueDates[j] = dueDates[j + 1];
                        dueDates[j + 1] = tmp;
                    }
                }
                tasks[i].filterState = "0"
                result.push(dueDates[i])
            }
            else if(filter == "addedDate"){
                tasks[i].filterState = "1"
                result.push(tasks[i])
            }
            else{ //check is the filter is set to "All"
                tasks[i].filterState = "0"
                result.push(tasks[i])
            }
        }
        return result;
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

                            {infoModalIsOpen[0] && <InfoModal onClose={closeInfoModalHandler} task={infoModalIsOpen[1]}></InfoModal>}
                            {infoModalIsOpen[0] && <Backdrop onCancel={closeInfoModalHandler}></Backdrop>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-1 p-3 px-5 justify-content-end">
                <div className="col-auto d-flex align-items-center">
                    <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                    <select className="custom-select custom-select-sm btn my-2" id="dropdowns" onChange={e => {setFilter(e.target.value); console.log(e.target.value)}}>
                        <option value="all" selected>All</option>
                        <option value="completed">Completed</option>
                        <option value="active">Active</option>
                        <option value="dueDate">Due date</option>
                        <option value="addedDate">Added date</option>
                    </select>
                </div>
                {/*
                <div className="col-auto d-flex align-items-center px-1 pr-3">
                    <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                    <select className="custom-select custom-select-sm btn my-2" id="dropdowns">
                        <option value="added-date-asc" selected>Added date</option>
                        <option value="due-date-desc">Due date</option>
                    </select>
                    <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                    <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
                </div>*/}
            </div>

            <div className="row mx-1 px-5 pb-3 w-80" id="template">
                <div className="col mx-auto">
                    <TaskList></TaskList>
                </div>
            </div>
            {props.children}
        </TasksContext.Provider>
    );
}

export default Template