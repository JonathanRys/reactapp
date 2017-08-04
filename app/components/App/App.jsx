var React = require('react');

// Include components
//var Banner = require('../Banner/Banner.jsx');
var Menu = require('../Menu/Menu.jsx');
var Content = require('../Content/Content.jsx');
var Footer = require('../Footer/Footer.jsx');

// Load images
//var banner = './img/banner.png';

var menu = [{
                label:'Profile',
                link: '#',
                icon: 'user'
            },
            {
                label:'Jobs Portal',
                link: '#',
                icon: 'briefcase '
            },
            {
                label:'Search',
                link: '#',
                icon: 'search'
            }];

class App extends React.Component {
    render(){
        return (<div>
                    <Menu menuItems={menu} />
                    <Content />
                    <Footer />
                </div>);
    }
}

module.exports = App;