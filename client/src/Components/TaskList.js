import React from "react";
import Task from "./Task";

function TaskList(props) {
	function setChecked(task, value) {
		var newTasks = [...props.tasks]
		newTasks[props.tasks.indexOf(task)].checked = value
		props.setTasks(newTasks)
		console.log(value)
	}
	const tasksView = props.tasks.map((task) =>
		<Task key={task} name={task.name} checked={task.checked} setChecked={v => setChecked(task, v)}></Task>
	)

	return (
		<ul>
			{tasksView}
		</ul>
	)
}

export default TaskList