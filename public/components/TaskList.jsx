let linkTaskList;
let TaskList = React.createClass({
	getInitialState: function() {
		linkTaskList = this;
		return {
			displayedTasks: []
		}
	},
	componentDidMount: function() {
		$.ajax({
			url: '/tasks',
			method: 'GET',
			success: (response) => {
				tasks = response;
				this.setState({
					displayedTasks: tasks
				});
			}
		});
	},
	render: function() {
		return <div>
			{
				this.state.displayedTasks.map((el) => {
					let checked = '';
					if(el.status == 'done') checked = 'checked';
					return <Task key={el._id} _id={el._id} checked={checked} text={el.text} />;
				})
			}
		</div>;
	}
});