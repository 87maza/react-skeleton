var React = require('react');
var OtherInner = require('./OtherInner.jsx');

var Other = React.createClass({
	render: function(){
		return(
			<div>
				<h1>I AM OUTAR DIV</h1>
				<OtherInner />
			</div>
		)
	}
});

module.exports = Other;