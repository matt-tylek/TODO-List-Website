import React from "react"

class Task extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		return (
			<div>
				<input type="checkbox" checked={this.props.checked}></input>
				<span>{this.props.name}</span>
			</div>
		)
	}
}

export default Task