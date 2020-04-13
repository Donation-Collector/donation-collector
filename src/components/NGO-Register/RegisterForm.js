import React, {Component} from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <div className="title">
                        Register Form
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Image_Url</span>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Name</span>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Password</span>
                        </div>
                        <input type="text" className="input"/>
                    </div >
                    <div className="form">
                        <div className="Box_title">
                            <span>Phone</span>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Email</span>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Cover Area</span>
                        </div>
                        <input type="text" className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Description</span>
                        </div>
                        <textarea className="description"></textarea>
                    </div>
                </form>
                <div className="submit-button-body">
                    <a href="/naddress" type="button" className="submit-button btn btn-secondary">Next</a>
                </div>
                <div className="to-login-body">
                    <a href="/nlogin" className="to-login-link">Already exist an account? Login Here!</a>
                </div>

            </div>
        );
    }
}

export default RegisterForm;