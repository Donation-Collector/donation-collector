import React, {Component} from 'react';
import logo from '../../assets/images/mei_072019-25.jpg'
import '../../styles/starter-page/TopBar.css'

class TopBar extends Component {
    render() {
        return (
            <header className="starter-topbar-header">
                <a href="/">
                    <img src={logo} className="starter-topbar-logo" alt="logo"/>
                </a>

                <h1 className="starter-topbar-title">Donation Collector</h1>
                <h5 className="starter-topbar-helper">Help us to build a better world!</h5>
            </header>
        );
    }
}

export default TopBar;