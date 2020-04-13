import React, {Component} from 'react';

import TopBar from "../starter-page/TopBar"
import AboutUsMain from "../starter-page/About-us-main";
import RegisterForm from "./RegisterForm"

class NgoRegisterApp extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <RegisterForm />
                <AboutUsMain />
            </div>
        );
    }
}

export default NgoRegisterApp;