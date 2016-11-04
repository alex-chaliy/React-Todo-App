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
				<input type="checkbox" id={'taskCheckbox-' + this.props._id} className="filled-in" defaultChecked/>
				<label htmlFor={'taskCheckbox-' + this.props._id}> {this.props.text} </label>
			</div>
		</div>
	}
});

let TaskList = React.createClass({
	render() {
		return <div>
			{
				tasks.map((el) => {
					return <Task key={el._id} _id={el._id} text={el.text} />;
					//return <h3  key={el._id}> {el.text} </h3>
				})
			}
		</div>;
	}
});

ReactDOM.render(
	<TaskList/>,
	document.getElementById('tasks')
);


// <Task text={data.tasks[0].text} />