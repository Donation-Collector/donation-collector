import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";

class NgoAddress extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <div className="title">
                    Register Form
                </div>

                <div className="form">
                    <div className="Box_title">
                        <span>Address Line 1</span>
                    </div>
                    <input type="text" className="input"/>
                    <div className="Box_title">
                        <span>Address Line 2</span>
                    </div>
                    <input type="text" className="input"/>
                    <div className="Box_title">
                        <span>City</span>
                    </div>
                    <input type="text" className="input"/>
                    <div className="Box_title">
                        <span>State</span>
                    </div>
                    <input type="text" className="input"/>
                    <div className="Box_title">
                        <span>Zipcode</span>
                    </div>
                    <input type="text" className="input"/>
                </div>
                <br/>
                <div className="submit-button-body">
                    <a href="nregister" type="button" className="submit-button btn btn-secondary">Back</a>
                    <button type="button" className="submit-button btn btn-primary">Submit</button>
                </div>
                <div className="to-login-body">
                    <a href="/nlogin" className="to-login-link">Already exist an account? Login Here!</a>
                </div>

                <AboutUsMain />
            </div>
        );
    }
}

export default NgoAddress;