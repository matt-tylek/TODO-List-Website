import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./Template";

function TaskList(props) {

	const {tasks} = useContext(TasksContext)
	
	const tasksView = tasks.map((task) =>
		<Task key={task} task={task}></Task>
	)

	return (
		<ul>
			{tasksView}
		</ul>
	)
}

export default TaskList