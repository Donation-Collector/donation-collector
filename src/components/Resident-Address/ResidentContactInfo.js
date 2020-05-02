import React, {Component} from 'react';

class ResidentContactInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            addressLine1 : "",
            addressLine2 : "",
            city : "",
            zipcode: "",
            email: "",
            name: "",
            phone: "",
            state: ""
        }
        this.request = {
            address : "",
            donationRequest: "",
            items: "",
            // ngoName:"Environmental Defense Fund"
            ngoName: localStorage.getItem("ngoName")
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    buttonClick = (e) => {
        e.preventDefault()

        // date
        const date = new Date().toLocaleDateString();
        var d = date.split("/")
        var month = d[0];
        var day = d[1];
        if (d[0].length < 2)
            month = "0" + d[0]
        if (d[1].length < 2)
            day = "0" + d[1]
        var datetime = d[2] + '-' + month + '-' + day
        // console.log(d[2] + '-' + month + '-' + day)
        // get the address part
        this.request.address =
            {
                addressLine1: this.state.addressLine1,
                addressLine2: this.state.addressLine2,
                city: this.state.city,
                zipcode: this.state.zipcode,
                state: this.state.state
            };

        // get the donationRequest part
        this.request.donationRequest =
            {
                email: this.state.email,
                notes: "To Someone Need!",
                status: "",
                date: datetime,
                name: this.state.name,
                tel: this.state.phone
            };

        // get the item part
        const items = this.props.data;
        this.request.items = items
        const body = JSON.stringify(this.request)
        console.log(body)

        fetch('http://localhost:8080/pickup', {
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
                if (response === 'success') {
                    console.log(response)
                    alert("Submit Success!")
                }
                else {
                    alert("Submit failed")
                }
            })
            .catch((err) => console.log(err))
    }



    render(){
        const {addressLine1, addressLine2, city, zipcode, email, name, phone, state} = this.state
        return(
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email"
                                   name="email"
                                   value={email}
                                   onChange={this.changeHandler}
                                   className="form-control"
                                   id="inputEmail4"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName4">Name</label>
                            <input type="name"
                                   className="form-control"
                                   name="name"
                                   value={name}
                                   onChange={this.changeHandler}
                                   id="inputName4"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Phone Number</label>
                        <input type="text"
                               className="form-control"
                               id="inputPhoneNumber"
                               name="phone"
                               value={phone}
                               onChange={this.changeHandler}
                               placeholder="012-345-6789"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Address1</label>
                        <input type="text"
                               className="form-control"
                               id="inputAddress"
                               name="addressLine1"
                               value={addressLine1}
                               onChange={this.changeHandler}
                               placeholder="1234 Main St"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text"
                               className="form-control"
                               id="inputAddress2"
                               name="addressLine2"
                               value={addressLine2}
                               onChange={this.changeHandler}
                               placeholder="Apartment, studio, or floor"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text"
                                   className="form-control"
                                   name="city"
                                   value={city}
                                   onChange={this.changeHandler}
                                   id="inputCity"/>
                        </div>

                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <input type="text"
                                   className="form-control"
                                   name="state"
                                   value={state}
                                   onChange={this.changeHandler}
                                   id="inputState"/>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text"
                                   className="form-control"
                                   name="zipcode"
                                   value={zipcode}
                                   onChange={this.changeHandler}
                                   id="inputZip"/>
                        </div>
                    </div>

                    <button type="submit"
                            className="btn btn-primary"
                            onClick={this.buttonClick}
                    >Submit</button>

                </form>
            </div>
        );
    }
}
export default ResidentContactInfo;
