import React, {Component} from 'react';
import NGOInfo from './NGOInfo';

class Body extends Component {
    constructor() {
        super();
        this.state = {
            data : [
                {id: "1", email : "abc@donate.com", phone : "111-222-3333", address : "aa street"},
                {id: "2", email : "qwe@donate.com", phone : "111-222-3333", address : "bb street"},
                {id: "3", email : "daf@donate.com", phone : "111-222-3333", address : "df street"},
                {id: "4", email : "vavda@donate.com", phone : "111-222-3333", address : "qf street"},
                {id: "5", email : "aadc@donate.com", phone : "111-222-3333", address : "fqe street"},
                {id: "6", email : "abcwfs@donate.com", phone : "111-222-3333", address : "grq street"},
                {id: "7", email : "absadc@donate.com", phone : "111-222-3333", address : "qdf street"},
                {id: "8", email : "abhtc@donate.com", phone : "111-222-3333", address : "qef street"},
                {id: "9", email : "a235bc@donate.com", phone : "111-222-3333", address : "dsv street"}
            ]
        }
    }
    render() {
        const {data} = this.state;
        return (
            <body className="body">
            <div className="div1">
                <table className="table1">
                    <tr>
                        <th>id</th>
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
                                key = {info.id}
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