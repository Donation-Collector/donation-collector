import React, {Component} from 'react';

class NgoInfo extends Component {

    render() {
        const {data} = this.props;
        return (
            <tr id="ngoinfo">
                <th>{data.NGOname}</th>
                <th>{data.email}</th>
                <th>{data.phone}</th>
                <th>{data.address}</th>
                <th>{data.distance}</th>
            </tr>
        );
    }
}

export default NgoInfo;