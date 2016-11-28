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