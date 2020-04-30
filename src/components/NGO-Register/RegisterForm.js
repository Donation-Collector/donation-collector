import React, {Component} from 'react';
import Link from "react-router/lib/Link";

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image_url: '',
            name: '',
            password: '',
            phone: '',
            email: '',
            coverarea: '',
            description: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        const {image_url, name, password, phone, email, coverarea, description} = this.state
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
                        <input type="text" name="image_url"
                               value={image_url}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Name</span>
                        </div>
                        <input type="text" name="name"
                               value={name}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Password</span>
                        </div>
                        <input type="password" name="password"
                               value={password}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div >
                    <div className="form">
                        <div className="Box_title">
                            <span>Phone</span>
                        </div>
                        <input type="text" name="phone"
                               value={phone}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Email</span>
                        </div>
                        <input type="text" name="email"
                               value={email}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Cover Area</span>
                        </div>
                        <input type="text" name="coverarea"
                               value={coverarea}
                               onChange={this.changeHandler}
                               className="input"/>
                    </div>
                    <div className="form">
                        <div className="Box_title">
                            <span>Description</span>
                        </div>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            className="input"
                            onChange={this.changeHandler}
                        />
                    </div>
                </form>
                {/*<div className="submit-button-body">*/}
                {/*    <form onClick={this.clickHandler}>*/}
                {/*        <button type="button">Next</button>*/}
                {/*    <button href="/naddress" type="button" className="submit-button btn btn-secondary">Next</button>*/}
                {/*    </form>*/}
                {/*</div>*/}
                <Link
                    to={{
                    pathname: '/naddress',
                    state: this.state
                }}>Next
                </Link>
                <div className="to-login-body">
                    <a href="/nlogin" className="to-login-link">Already exist an account? Login Here!</a>
                </div>

            </div>
        );
    }
}

export default RegisterForm;