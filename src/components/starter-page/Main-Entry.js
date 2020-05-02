import React, {Component} from 'react';

class MainEntry extends Component {
    render() {
        return (
            <div className="starter-main-body">
                <div className="home-button-container">
                    <a href="/resident" className="btn btn-primary starter-resident-button">Donate Now</a>
                    <a href="/nlogin" className="btn btn-primary starter-ngo-button">NGO Entry</a>
                </div>

            </div>
        );
    }
}

export default MainEntry;