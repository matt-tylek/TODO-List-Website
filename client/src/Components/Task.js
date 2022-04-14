import React, { useContext } from "react"
import { TasksContext } from "./Template"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import CheckBox from "react-animated-checkbox"
import { useState } from "react";
 

export function Task(props) {
	const {getTasks, setTasks, setTask, viewTask, deleteTask} = useContext(TasksContext);

	function handleAnimation(){
		setChecked(!props.task.checked)
	};

	function setChecked(value) {
		var newTask = props.task
		newTask.checked = value
		setTask(newTask)
	}

	return (
		<li>
			{/*<input type="checkbox" checked={props.task.checked} onChange={e => setChecked(e.target.checked)}></input>*/}
			<CheckBox
				checked={props.task.checked}
  				checkBoxStyle={{
    				checkedColor: "#34b93d",
    				size: 20,
    				unCheckedColor: "#b8b8b8"
  				}}
  				duration={400}
				onClick={handleAnimation}
			/>
			<div onClick={e=>viewTask(props.task)} id="taskDivMouseCursor">
				<span>  {props.task.name} </span>
			</div>
			<div id="formatTrashCan" onClick={e=>deleteTask(props.task)}>
				<FontAwesomeIcon icon={faTrashCan} />
			</div>
		</li>
	)
}

export default Task