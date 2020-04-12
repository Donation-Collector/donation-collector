import React, {Component} from 'react';
import logo from '../../assets/images/mei_072019-25.jpg'

class TopBar extends Component {
    render() {
        return (
            <header className="dropoff-topbar-header">
                <a href="/">
                    <img src={logo} className="dropoff-topbar-logo" alt="logo"/>
                </a>
                <h1 className="dropoff-topbar-title">Donation Collector</h1>
                <h5 className="dropoff-topbar-helper">Help us to build a better world!</h5>
            </header>
        );
    }
}

export default TopBar;