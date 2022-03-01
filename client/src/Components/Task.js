import React, { useContext } from "react"
import { TasksContext } from "./Template"

export function Task(props) {
	const {tasks, setTasks, setTask, viewTask} = useContext(TasksContext);

	function setChecked(value) {
		var newTask = props.task
		newTask.checked = value
		setTask(newTask)
	}

	return (
		<li>
			<div onClick={e=>viewTask(props.task)}>
				<input type="checkbox" checked={props.task.checked} onChange={e => setChecked(e.target.checked)}></input>
				<span>  {props.task.name} </span>
			</div>
		</li>
	)
}

export default Task