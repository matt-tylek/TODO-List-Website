import React, { useContext } from "react"
import { TasksContext } from "./Template"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
 

export function Task(props) {
	const {tasks, setTasks, setTask, viewTask, deleteTask} = useContext(TasksContext);

	function setChecked(value) {
		var newTask = props.task
		newTask.checked = value
		setTask(newTask)
	}

	return (
		<li>
			<input type="checkbox" checked={props.task.checked} onChange={e => setChecked(e.target.checked)}></input>
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