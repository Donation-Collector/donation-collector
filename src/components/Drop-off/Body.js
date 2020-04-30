import React, {Component} from 'react';
import NGOInfo from './NGOInfo';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : this.props.showdropoff
        }
    }

    render() {
        const {data} = this.state;
        return (
            <body className="body">
            <div className="div1">
                <table className="table1">
                    <tr>
                        <th>NGO</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>address</th>
                    </tr>
                </table>
            </div>
            <div className="div2">
                <table className="table2">
                    {data.map(
                        info => {
                            return <NGOInfo
                                key = {info.address}
                                data = {info}
                            />
                        }
                    )}
                </table>
            </div>
            </body>
        );
    }
}

export default Body;