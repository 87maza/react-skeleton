var React = require('react');
var ReactDOM = require('react-dom');
var ListManager = require('./components/ListManager.jsx');
var Other = require('./components/Other.jsx');


ReactDOM.render(<ListManager title="Ingredients" />, document.getElementById('ingredients'));
ReactDOM.render(<Other />, document.getElementById('divs'));