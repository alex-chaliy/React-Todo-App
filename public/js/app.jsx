'use strict';

let tabsData = [
	{
		_id: 'tab1',
		text: 'All',
		searchKey: '',
		isActive: true
	},
	{
		_id: 'tab2',
		text: 'Active',
		searchKey: 'active',
		isActive: false
	},
	{
		_id: 'tab3',
		text: 'Done',
		searchKey: 'done',
		isActive: false
	},
];
let Tab = React.createClass({
	filterTasks: function() {
		let searchQuery = 'done';
		let displayedTasks = tasks.filter((el) => {
			let searchValue = el.status;
			return searchValue.indexOf(searchQuery) !== -1;
		});
		console.log(displayedTasks);
		linkTaskList.setState({
			displayedTasks: displayedTasks
		});
	},
	render: function() {
		return <div>
			<li className="tab col s4" onClick={this.filterTasks}>
				<a className={this.props.tabClassName}>
					{this.props.text}
				</a>
			</li>
		</div>
	}
});
let Tabs = React.createClass({
	componentDidMount: function() {
		$('ul.tabs').tabs();
	},
	render: function() {
		return <ul className="tabs">
			{
				tabsData.map((el) => {
					let tabClassName;
					if(el.isActive === true) tabClassName = 'active';
					return <Tab key={el._id} 
								text={el.text}
								tabClassName={tabClassName}
								/>;
				})
			}
		</ul>
	}
});

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
let SearchInput = React.createClass({
	handleSearch: function(event) {
		let searchQuery = event.target.value;
		let displayedTasks = tasks.filter((el) => {
			let searchValue = el.text;
			return searchValue.indexOf(searchQuery) !== -1;
		});
		console.log(displayedTasks);
		linkTaskList.setState({
			displayedTasks: displayedTasks
		});
	},
	render: function() {
		return <div className="searchInput input-field z-depth-1">
			<input placeholder="Search task" id="input-search" type="text" onChange={this.handleSearch} />
		</div>
	}
});

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


ReactDOM.render(
	<Tabs/>,
	document.getElementById('tabs')
);

ReactDOM.render(
	<div>
		<SearchInput/>
		<TaskInput/>
	</div>,
	document.getElementById('inputs')
);
ReactDOM.render(
	<TaskList/>,
	document.getElementById('tasks')
);