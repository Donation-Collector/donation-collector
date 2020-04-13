import React, {Component} from 'react';

class RegisterForm extends Component {
    render() {
        return (
            <form>
                <div className="title">
                    Register Form
                </div>
                <div className="form">
                    <div>
                        <span>Name</span>
                    </div>
                    <input type="text"/>
                </div>
                <div className="form">
                    <div>
                        <span>Password</span>
                    </div>
                    <input type="text"/>
                </div>
                <div className="form">
                    <div>
                        <span>Phone</span>
                    </div>
                    <input type="text"/>
                </div>
                <div className="form">
                    <div>
                        <span>Email</span>
                    </div>
                    <input type="text"/>
                </div>
                <div className="form">
                    <div>
                        <span>Address</span>
                    </div>
                    <input type="text"/>
                </div>
            </form>
        );
    }
}

export default RegisterForm;