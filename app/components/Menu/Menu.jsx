var React = require('react');
var FontAwesome = require('react-fontawesome');

var Menu = React.createClass({
    render: function() {
        var menu = [];

        for (var i = 0; i < this.props.menuItems.length; i++) {
            menu.push(<a key={i} href={this.props.menuItems[i].link}><li className="nav-item"><FontAwesome name={this.props.menuItems[i].icon} /> {this.props.menuItems[i].label}</li></a>);
        }
        return (<nav>
                    <ul className="nav">
                        {menu}
                        <FontAwesome className="settings" name='bars' />
                    </ul>
                </nav>);
    }
});

module.exports = Menu;