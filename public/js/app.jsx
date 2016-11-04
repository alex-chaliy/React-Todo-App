let data = {
	tasks: [
		{
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
			status: 'active',
			text: 'commit changes',
			imgs: []
		},
		{
			status: 'done',
			text: 'save users'
		}
	]
}

let Task = React.createClass({
	render() {
		return <div className="card task clearfix">
			<div className="card-content left clearfix">
				<input type="checkbox" id="taskCheckbox-objId2" className="filled-in" defaultChecked/>
				<label htmlFor="taskCheckbox-objId2"> {this.props.text} </label>
			</div>
		</div>
	}
});

ReactDOM.render(
	<div>
		<Task text={data.tasks[0].text} />
	</div>,
	document.getElementById('todo-app')
);