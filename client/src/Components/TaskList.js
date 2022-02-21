import React from "react";
import Task from "./Task";

function TaskList(props) {
	const tasksView = props.tasks.map((task) =>
		<Task name={task.name} checked={task.checked}></Task>
	)

	return (
		<ul>
			{tasksView}
		</ul>
	)
}

export default TaskList