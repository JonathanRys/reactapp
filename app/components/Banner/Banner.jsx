var React = require('react');

var Banner = React.createClass({
    render: function() {
        return (<header>
                    <div>
                        <img src={this.props.src} />
                    </div>
                </header>);
    }
});

module.exports = Banner; 