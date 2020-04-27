import React, {Component} from 'react';

class LoginForm extends Component {
    render() {
        return (
            <div className="login-body">
                <form className="form-body">
                    <div className="title">
                        Login Now
                    </div>
                    <div className="form">
                        <div>
                            <span>Name</span>
                        </div>
                        <input type="text" placeholder="UserName"/>
                    </div>
                    <div className="form">
                        <div>
                            <span>Password</span>
                        </div>
                        <input type="text" placeholder="Password"/>
                    </div>
                </form>
                <div className="login-button">
                    <a className="login-button-itself btn btn-primary" href=" ">
                        Login
                    </ a>
                </div>
                <div className="to-register">
                    < a href="/nregister" className="to-register-itself">Not a member? Register here!</ a>
                </div>
            </div>
        );
    }
}

export default LoginForm;