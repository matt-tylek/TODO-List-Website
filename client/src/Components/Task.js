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
			<input type="checkbox" checked={props.task.checked} onChange={e => setChecked(e.target.checked)}></input>
			<div onClick={e=>viewTask(props.task)} id="taskDivMouseCursor">
				<span>  {props.task.name} </span>
			</div>
		</li>
	)
}

export default Task