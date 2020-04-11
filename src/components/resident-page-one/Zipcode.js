import React, {Component} from 'react';

class zipcode extends Component {
    render() {
        return (
                <div className="input-group mb-3">
                    <input type="text" className="form-control" onInput="OnlyNumbers()" placeholder="Your zipcode" maxLength={5}
                           aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" id="button-addon2">Submit
                            </button>
                        </div>
                </div>
        );
    }
}

export default zipcode;