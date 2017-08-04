var React = require('react');
var FontAwesome = require('react-fontawesome');

function handleClick(e) {
    var buttons = document.querySelectorAll('nav .nav-item')
    buttons.forEach((elem)=>{elem.className = 'nav-item'});
    e.target.className += ' selected';
}

var Menu = React.createClass({
    render: function() {
        var menu = [];

        for (var i = 0; i < this.props.menuItems.length; i++) {
            var x = this.props.menuItems[i];
            menu.push(<a key={i} href={x.link}><li className={"nav-item" + ((i === 0)? " selected": '')} onClick={handleClick}><FontAwesome name={x.icon} /> {x.label}</li></a>);
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