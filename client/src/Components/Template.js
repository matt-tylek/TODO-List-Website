import React from "react"
import "./Template.css";

function Template() {
    return( 
        <>
        
        <div className="row m-1 p-4">
            <div className="col">
                <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <u>My Todo-s</u>
                </div>
            </div>
        </div>
        <div className="row m-1 p-3">
            <div className="col col-11 mx-auto">
                <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div className="col">
                        <input className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .."></input>
                    </div>
                    <div className="col-auto m-0 px-2 d-flex align-items-center">
                        <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                        <i className="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                        <i className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                    </div>
                    <div className="col-auto px-0 mx-0 mr-2">
                        <button type="button" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>

        <div className="row m-1 p-3 px-5 justify-content-end">
            <div className="col-auto d-flex align-items-center">
                <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                <select className="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                    <option value="has-due-date">Has due date</option>
                </select>
            </div>
            <div className="col-auto d-flex align-items-center px-1 pr-3">
                <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                <select className="custom-select custom-select-sm btn my-2">
                    <option value="added-date-asc" selected>Added date</option>
                    <option value="due-date-desc">Due date</option>
                </select>
                <i className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                <i className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
            </div>
        </div>

        <div className="row mx-1 px-5 pb-3 w-80">
            <div className="col mx-auto">
                <div className="row px-3 align-items-center todo-item rounded">
                    <div className="col-auto m-1 p-0 d-flex align-items-center">
                        <h2 className="m-0 p-0">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label" for="flexCheckDefault">
                                <input type="text" className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value="Task..." title="Task..." />
                                <input type="text" className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Task..." />
                            </label>
                        </div>
                        </h2>
                    </div>
                    <div className="col-auto m-1 p-0 px-3 d-none">
                    </div>
                    <div className="col-auto m-1 p-0 todo-actions">
                        <div className="row d-flex align-items-center justify-content-end">
                            <h5 className="m-0 p-0 px-2">
                                <i className="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                            </h5>
                            <h5 className="m-0 p-0 px-2">
                                <i className="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                            </h5>
                        </div>
                        <div className="row todo-created-info">
                            <div className="col-auto d-flex align-items-center pr-2">
                                <label className="date-label my-2 text-white-50" class="test">9th Feb 2022</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Template