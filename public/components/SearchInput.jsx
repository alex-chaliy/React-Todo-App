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