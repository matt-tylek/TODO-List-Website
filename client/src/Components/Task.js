import React from "react"

class Task extends React.Component {
	constructor(props) {
		super(props)
		this.props = props
	}
	render() {
		return (
			<li>
				<input type="checkbox" checked={this.props.checked} onChange={e => this.props.setChecked(e.target.checked)}></input>
				<span>{this.props.name}</span>
			</li>
		)
	}
}

export default Task