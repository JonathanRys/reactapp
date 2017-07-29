var React = require('react');

// Include components
var Banner = require('../Banner/Banner');
var Menu = require('../Menu/Menu');
var Content = require('../Content/Content');
var Footer = require('../Footer/Footer');

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
                    <header>
                        <Banner src={banner} />
                    </header>
                    <nav>
                        <Menu menuItems={menu} />
                    </nav>
                    <main>
                        <Content />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>);
    }
});

module.exports = App;