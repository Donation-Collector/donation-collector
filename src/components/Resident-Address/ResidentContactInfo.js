import React, {Component} from 'react';
import RegisterForm from "../NGO-Register/RegisterForm";

class ResidentContactInfo extends Component {
    render(){
        return(
            <div>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4"/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputName4">Name</label>
                            <input type="name" className="form-control" id="inputName4"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Phone Number</label>
                        <input type="text" className="form-control" id="inputPhoneNumber" placeholder="012-345-6789"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input type="text" className="form-control" id="inputAddress2"
                               placeholder="Apartment, studio, or floor"/>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">City</label>
                            <input type="text" className="form-control" id="inputCity"/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="inputState">State</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputZip">Zip</label>
                            <input type="text" className="form-control" id="inputZip"/>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </div>
        );
    }
}
export default ResidentContactInfo;
