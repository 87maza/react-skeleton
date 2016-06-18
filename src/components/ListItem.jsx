var React = require('react');
var ListItem = React.createClass({
	render: function(){
		//render is jsx that will convert HTML element into javascript
		return(
			<li>
				<h4>{this.props.text}</h4>
			</li>
		);
	}
});

module.exports = ListItem;