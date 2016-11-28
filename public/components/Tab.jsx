let Tab = React.createClass({
	filterTasks: function(searchQuery) {
		console.log(searchQuery);
		searchQuery = searchQuery || '';
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
			<li className="tab col s4" onClick={this.filterTasks.bind(this, 'done')}>
				<a className={this.props.tabClassName}>
					{this.props.text}
				</a>
			</li>
		</div>
	}
});