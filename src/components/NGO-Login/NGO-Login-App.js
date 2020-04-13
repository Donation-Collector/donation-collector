import React, {Component} from 'react';
import LoginForm from "./LoginForm"
import TopBar from "../starter-page/TopBar"
import AboutUsMain from "../starter-page/About-us-main";

class NgoLoginApp extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <LoginForm/>
                <AboutUsMain/>
            </div>
        );
    }
}

export default NgoLoginApp;