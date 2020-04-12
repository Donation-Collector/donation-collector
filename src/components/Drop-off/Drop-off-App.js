import React, {Component} from 'react';
import Body from "./Body";

import TopBar from "../starter-page/TopBar"
import AboutUsMain from "../starter-page/About-us-main";

class DropOffApp extends Component {
    render() {
        return (
            <div className="drop_off">
                <TopBar />
                <Body />
                <AboutUsMain />
            </div>
        );
    }
}

export default DropOffApp;