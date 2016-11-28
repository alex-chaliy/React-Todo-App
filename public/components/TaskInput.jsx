let TaskInput = React.createClass({
	render: function() {
		return <div className="taskInput input-field z-depth-1">
			<input placeholder="New task" id="input-task" type="text" />
			<button className="taskInput-addBtn btn waves-effect waves-light">
				<i className="material-icons">add</i>
			</button>
		</div>
	}
});