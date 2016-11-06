'use strict';

let tasks;

let Task = React.createClass({
	render: function() {
		return <div className="card task clearfix">
			<div className="card-content left clearfix">
				<input type="checkbox" id={'taskCheckbox-' + this.props._id} className="filled-in" defaultChecked={this.props.checked}/>
				<label htmlFor={'taskCheckbox-' + this.props._id}> {this.props.text} </label>
			</div>
		</div>
	}
});

let TaskList = React.createClass({
	getInitialState: function() {
		return {
			displayedTasks: []
		}
	},
	componentWillMount: function() {
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
	handleSearch: function(event) {
		let searchQuery = event.target.value;
		let displayedTasks = tasks.filter((el) => {
			let searchValue = el.text;
			return searchValue.indexOf(searchQuery) !== -1;
		});
		console.log(displayedTasks);
		this.setState({
			displayedTasks: displayedTasks
		});
	},
	render: function() {
		return <div>
			<div className="searchInput input-field z-depth-1">
				<input placeholder="Search task" id="input-search" type="text" onChange={this.handleSearch} />
			</div>
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

ReactDOM.render(
	<TaskList/>,
	document.getElementById('tasks')
);