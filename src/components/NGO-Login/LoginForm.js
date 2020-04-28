import React, {Component} from 'react';

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            password: ''
        }
    }
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        const {name, password} = this.state;
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
                        <input type="text" name="name" value={name}
                               onChange={this.changeHandler}
                               placeholder="UserName"/>
                    </div>
                    <div className="form">
                        <div>
                            <span>Password</span>
                        </div>
                        <input type="password" name="password" value={password}
                               onChange={this.changeHandler}
                               placeholder="Password"/>
                    </div>
                    <div className="login-button">
                        {/*<a className="login-button-itself btn btn-primary" href=" ">*/}
                        {/*    Login*/}
                        {/*/!*</ a>*!/*/}
                        {/*<button type="submit" className="login-button-itself btn btn-primary" onClick={this.handleSubmit}>*/}
                        {/*    Login*/}
                        {/*</button>*/}
                        <form onSubmit={this.handleSubmit}>
                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </form>
                <div className="to-register">
                    < a href="/nregister" className="to-register-itself">Not a member? Register here!</ a>
                </div>
            </div>
        );
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))
        // const user = {
        //     name : "toy Ngo",
        //     password : "12345"
        // };
        // const jsonobj = JSON.stringify(user);
        // console.log(user)
        fetch('http://localhost:8080/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
                // 'Accept': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            }
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(response)
                if (response === "true") {
                    alert('login successfully')
                } else {
                    alert('no')
                }
            })
            .catch((err) => console.log(err))
    }

}

export default LoginForm;