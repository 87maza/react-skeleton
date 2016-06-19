var React = require('react');
var List = require('./List.jsx')
//grandfather class
var ListManager = React.createClass({
	//getInitialState is only called once, this one can receive user input
	//every component created will call getInitialState when component first loads
	getInitialState: function(){
		return {items: [], newItemText: ''};
	},
	onChange: function(e){
		this.setState({newItemText: e.target.value});
	},
	handleSubmit: function(e){
		//using html form to submit
		e.preventDefault();
		//components have property and states
		//this.props = READ ONLY, immutable data
		//this.state = data that can change, mutable!
		var currentItems = this.state.items;
		currentItems.push(this.state.newItemText);
		this.setState({items: currentItems, newItemText:''});
	},
	render: function(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.onChange} value={this.state.newItemText} />
					<button>ADD</button>
				</form>
				<List items={this.state.items}/>
			</div>
		);
	}

});

module.exports = ListManager;