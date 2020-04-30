import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";


class NgoAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addressLine1: '',
            addressLine2: '',
            city: '',
            zipcode: '',
            state: ''
        };
        this.data1 = {
            id: 10,
            name: '',
            password: '',
            imgUrl: '',
            email: '',
            phoneNum: '',
            coverArea: '',
            description: '',
            address: ''
        };
    }

    changeHandler = (e) => {
        // this.setState({[e.target.name]: e.target.value})
        this.setState({[e.target.name] : e.target.value})
    }

    buttonClick = (e) => {
        e.preventDefault()
        // console.log(this.props.router.location.state)
        const data = this.props.router.location.state
        this.data1.imgUrl = data.image_url
        this.data1.name = data.name
        this.data1.password = data.password
        this.data1.phoneNum = data.phone
        this.data1.email = data.email
        this.data1.coverArea = data.coverarea
        this.data1.description = data.description
        this.data1.address = {
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            city: this.state.city,
            zipcode: this.state.zipcode,
            state: this.state.state
        }
        const body = JSON.stringify(this.data1)
        // console.log(JSON.stringify(this.data1))
        fetch('http://localhost:8080/registration', {
            method: 'POST',
            body: body,
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
            })
            .catch((err) => console.log(err))
    }

    render() {
        // address part
        const {addressLine1, addressLine2, city, zipcode, state} = this.state
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
                    <input type="text"
                           name="addressLine1"
                           value={addressLine1}
                           // value={address.addressLine1}
                           onChange={this.changeHandler}
                           className="input"/>
                    <div className="Box_title">
                        <span>Address Line 2</span>
                    </div>
                    <input type="text"
                           name="addressLine2"
                           value={addressLine2}
                           //value={address.addressLine2}
                           onChange={this.changeHandler}
                           className="input"/>
                    <div className="Box_title">
                        <span>City</span>
                    </div>
                    <input type="text"
                           name="city"
                           value={city}
                           //value={address.city}
                           onChange={this.changeHandler}
                           className="input"/>
                    <div className="Box_title">
                        <span>State</span>
                    </div>
                    <input type="text"
                           name="state"
                           value={state}
                           //value={address.state}
                           onChange={this.changeHandler}
                           className="input"/>
                    <div className="Box_title">
                        <span>Zipcode</span>
                    </div>
                    <input type="text"
                           name="zipcode"
                           value={zipcode}
                           //value={address.zipcode}
                           onChange={this.changeHandler}
                           className="input"/>
                </div>
                <br/>
                <div className="submit-button-body">
                    <a href="nregister" type="button" className="submit-button btn btn-secondary">Back</a>
                    <button type="button" className="submit-button btn btn-primary"
                        onClick={this.buttonClick}
                    >
                        Submit
                    </button>
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