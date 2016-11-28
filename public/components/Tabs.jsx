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
								tabClassName={tabClassName} />;
				})
			}
		</ul>
	}
});