var React = require('react');
var FontAwesome = require('react-fontawesome');

function handleClick(e) {
    var buttons = document.querySelectorAll('nav .nav-item')
    buttons.forEach((elem)=>{elem.className = 'nav-item'});
    if (e.target.tagName === "LI") {
        e.target.className += ' selected';
    } else {
        e.target.parentNode.className += ' selected';
    }
}

class Menu extends React.Component {
    render() {
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
}

module.exports = Menu;