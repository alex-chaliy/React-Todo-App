'use strict';

let data = {
	tasks: [
		{
			_id: 'd46',
			status: 'done',
			text: 'make request',
			imgs: [
				{
					title: "Event Loop Model",
					imgUrl: "uploads/img/img-1.png"
				},
				{
					title: "React Arhitecture",
					imgUrl: "uploads/img/img-2.png"
				},
				{
					title: "Yosemite bg",
					imgUrl: "uploads/img/img-3.png"
				}
			]
		},
		{
			_id: 'd47',
			status: 'active',
			text: 'commit changes',
			imgs: []
		},
		{
			_id: 'd48',
			status: 'done',
			text: 'save users'
		}
	]
}
let tasks = data.tasks;

let Task = React.createClass({
	render() {
		return <div className="card task clearfix">
			<div className="card-content left clearfix">
				<input type="checkbox" id={'taskCheckbox-' + this.props._id} className="filled-in" defaultChecked={this.props.checked}/>
				<label htmlFor={'taskCheckbox-' + this.props._id}> {this.props.text} </label>
			</div>
		</div>
	}
});

let TaskList = React.createClass({
	getInitialState: () => {
		return {
			displayedTasks: tasks
		}
	},

	handleSearch: () => {
		let searchQuery = event.target.value;
		let displayedTasks = tasks.filter((el) => {
			let searchValue = el.text;
			return searchValue.indexOf(searchQuery) !== -1;
		});
		this.setState({
			displayedTasks: displayedTasks
		});
	},

	render() {
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