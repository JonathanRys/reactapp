var React = require('react')
var ReactDOM = require('react-dom')

var App = require('./components/App/App.jsx')

require('./stylesheets/style.scss')

ReactDOM.render(<App />, document.getElementById('app'))
