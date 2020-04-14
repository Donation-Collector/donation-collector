import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";
import NgoMainBody from "./Ngo-main-body";

class NgoMainApp extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <NgoMainBody/>
                <AboutUsMain/>
            </div>
        );
    }
}

export default NgoMainApp;