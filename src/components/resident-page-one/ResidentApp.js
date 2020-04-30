import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import ResidentEntry from "./Resident-Entry";
import AboutUsMain from "../starter-page/About-us-main";

class ResidentApp extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <ResidentEntry/>
                <AboutUsMain/>
            </div>
        );
    }
}

export default ResidentApp;