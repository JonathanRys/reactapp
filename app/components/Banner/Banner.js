var React = require('react');

var Banner = React.createClass({
    render: function() {
        return (<div>
                    <img src={this.props.src} />
                </div>);
    }
});

module.exports = Banner; 