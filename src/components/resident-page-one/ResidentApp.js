import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import ZipCode from "./Zipcode"
import ResidentEntry from "./Resident-Entry";
import AboutUsMain from "../starter-page/About-us-main";

class ResidentApp extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <ZipCode/>
                <ResidentEntry/>
                <AboutUsMain/>
            </div>
        );
    }
}

export default ResidentApp;