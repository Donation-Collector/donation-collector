import React, {Component} from 'react';
import AboutUsMain from "../starter-page/About-us-main";
import TopBar from "../starter-page/TopBar";
import ResidentContactInfo from "../Resident-Address/ResidentContactInfo"

class ResidentAddressApp extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <ResidentContactInfo/>

                <AboutUsMain/>
            </div>
        )
    }
}

export default ResidentAddressApp;