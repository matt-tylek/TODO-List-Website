export function InfoModal(props) {

	return (
		<div id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		{/*info from https://getbootstrap.com/docs/4.0/components/modal/*/}
		<div className="modal-header">
			<h5 className="modal-title" id="exampleModalLabel">{props.task.name}</h5>
			<button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={e => props.onClose()}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
		<div className="modal-body">
			<div class="form-group">
				<label>Completion Date:</label>
				<p>{props.task.date}</p>
			</div>
			<div class="form-group">
				<label>Descriptions/Notes</label>
				<p>{props.task.description}</p>
			</div>
		</div>
		<div class="modal-footer">
			<button className='btn btn-primary' onClick={e => props.onClose()}>Close</button>
		</div>
	</div>
	)

}