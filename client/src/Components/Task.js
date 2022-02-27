import React, { useContext } from "react"
import { TasksContext } from "./Template"

export function Task(props) {
	const {tasks, setTasks, setTask} = useContext(TasksContext);

	function setChecked(value) {
		var newTask = props.task
		newTask.checked = value
		setTask(newTask)
	}

	return (
		<li>
			<input type="checkbox" checked={props.task.checked} onChange={e => setChecked(e.target.checked)}></input>
			<span>  {props.task.name}</span>
		</li>
	)
}

export default Task