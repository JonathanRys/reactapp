var React = require('react');

// Include components
var Banner = require('../Banner/Banner.jsx');
var Menu = require('../Menu/Menu.jsx');
var Content = require('../Content/Content.jsx');
var Footer = require('../Footer/Footer.jsx');

// Load images
var banner = './img/banner.png';

var menu = [{
                label:'Home',
                link: '#'
            },
            {
                label:'About',
                link: '#'
            }];

var App = React.createClass({
    render: function(){
        return (<div>
                    <Banner src={banner} />
                    <Menu menuItems={menu} />
                    <Content />
                    <Footer />
                </div>);
    }
});

module.exports = App;