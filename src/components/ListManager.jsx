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
		var divStyle = {
			marginTop: 10
		}
		var headingStyle = {

		}
		if(this.props.headingColor){
			headingStyle.background = this.props.headingColor;
		}
		return(
			<div className="col-sm-4" style={divStyle}>
				<div className="panel panel-primary">
					<div style={headingStyle} className="panel-heading">
						<h3>{this.props.title}</h3>
					</div>
					<div className=" row panel-body">
						<form onSubmit={this.handleSubmit}>
							<div className="col-sm-9">
								<input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
							</div>
							<div className="col-sm-2">
								<button className="btn btn-primary">ADD</button>
							</div>
						</form>
					</div>
					<List items={this.state.items}/>
				</div>
			</div>
		);
	}

});

module.exports = ListManager;