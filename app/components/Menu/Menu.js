var React = require('react');

var Menu = React.createClass({
    render: function() {
        var menu = [];

        for (var i = 0; i < this.props.menuItems.length; i++) {
            menu.push(<a key={i} href={this.props.menuItems[i].link}><li className="nav-item">{this.props.menuItems[i].label}</li></a>);
        }
        return (<ul className="nav">
                    {menu}
                </ul>);
    }
});

module.exports = Menu;