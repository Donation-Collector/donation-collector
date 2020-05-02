import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";
import NGOInfo from "../Drop-off/NGOInfo";
import Link from "react-router/lib/Link";

class NearbyNgOsApp extends Component {
    constructor() {
        super();
        this.state= {
            zipcode: '',
            dropoff: [],
            ngoName: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e) {
        this.setState({
            zipcode: e.target.value
        })
    }

    optionSelect(e) {
        localStorage.setItem("ngoName", e.target.value)
    }

    handleClick(e) {
        let jsonTarget= [];
        const url ="http://localhost:8080/dropoff/" +this.state.zipcode;
        console.log(url);
        fetch(url, {
            method: 'get',
            // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
            //  body: ,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
            }
        })
            .then(res => res.json())
            .then(
                (res) => {
                    // console.log(localStorage.getItem("id"))
                    res.forEach(function(item) {
                        // console.log(item);
                        // jsonTarget.push({id: item.id, email: item.email, notes: item.notes, date: item.date});
                        jsonTarget.push({NGOname: item.name, email: item.email, phone: item.phoneNum,
                            address: item.address.addressLine1 + ',' + item.address.addressLine2 + ',' +item.address.city + ','
                                + item.address.zipcode, distance: item.distance
                        });
                        //console.log(jsonTarget);
                    });
                    this.setState(
                        {dropoff: jsonTarget}
                    )
                    console.log(this.state.dropoff);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error

                    });

                }
            )
    }

    render() {
        return (
            <div className="drop_off">
                <TopBar />
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Your zipcode" maxLength={5}
                           aria-label="Recipient's username" aria-describedby="button-addon2" onChange={this.handleChange} value={this.state.zipcode} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Submit
                        </button>
                    </div>
                </div>
                <body className="body">
                {/*<div className="div1">*/}
                {/*<table className="table1">*/}
                {/*    <tr>*/}
                {/*        <th>NGO</th>*/}
                {/*        <th>email</th>*/}
                {/*        <th>phone</th>*/}
                {/*        <th>address</th>*/}
                {/*        <th>distance</th>*/}
                {/*    </tr>*/}
                {/*</table>*/}
                {/*</div>*/}
                <div className="div2">
                    <table className="table2">
                        <tr className="title">
                            <th>NGO</th>
                            <th>email</th>
                            <th>phone</th>
                            <th>address</th>
                            <th>distance(miles)</th>
                        </tr>
                        {this.state.dropoff.map(
                            info => {
                                return <NGOInfo
                                    key = {info.address}
                                    data = {info}
                                />
                            }
                        )}
                    </table>
                </div>
                <div>
                    Choose the Ngo you prefer
                </div>
                <div className="selectPart">
                    <select onChange={this.optionSelect}>
                        {this.state.dropoff.map(
                            info => {
                                return <option value={info.NGOname}>{info.NGOname}</option>
                            }
                        )}
                    </select>
                </div>
                </body>
                <a href="/resident/items" className="btn btn-primary btn-lg btn-block" role="button" aria-pressed="true">Next</a>
                {/*<div className="next-button">*/}
                {/*    <Link className="btn btn-primary btn-lg btn-block"*/}
                {/*          to={{*/}
                {/*              pathname: '/resident/items',*/}
                {/*              state: this.state*/}
                {/*          }}>Next*/}
                {/*    </Link>*/}
                {/*</div>*/}
                <AboutUsMain />
            </div>
        );
    }
}

export default NearbyNgOsApp;