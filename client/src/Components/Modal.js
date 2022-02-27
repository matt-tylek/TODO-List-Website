function Modal(props) {
    
    function cancelHandler() {
        props.onCancel();
    }

    function confirmHandler() {
        props.onConfirm();
    }
    console.log(props.modalIsOpen)
    
        return (
            <div id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                {/*info from https://getbootstrap.com/docs/4.0/components/modal/*/}
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">New Task</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={cancelHandler}>
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="inputDate">Completion Date:</label>
                            <input type="date" class="form-control" id="inputDate"></input>
                        </div>
                        <div class="form-group">
                            <label for="inputDescription">Descriptions/Notes</label>
                            <input type="description" class="form-control" id="inputDescription" placeholder="..."></input>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button className='btn btn-alt' onClick={cancelHandler}>Close</button>
                    <button className='btn btn-primary' onClick={confirmHandler}>Add</button>
                </div>
            </div>
        );
    
    
}

export default Modal;