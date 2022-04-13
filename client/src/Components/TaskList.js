import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "./Template";

function TaskList(props) {

	const {getTasks} = useContext(TasksContext)
	
	const tasksView = getTasks().map((task) =>
		<Task key={task} task={task}></Task>
	)

	return (
		<ol id="formatList">
			{tasksView}
		</ol>
	)
}

export default TaskList