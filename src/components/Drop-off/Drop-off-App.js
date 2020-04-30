import React, {Component} from 'react';
import Body from "./Body";
import TopBar from "../starter-page/TopBar"
import AboutUsMain from "../starter-page/About-us-main";


class DropOffApp extends Component {
    constructor() {
        super();
        this.state= {
            zipcode: '',
            dropoff: [{NGOname: "ngo1", email:"123@qq.com", phone:"12345678", address:"123 road"},
                {NGOname: "ngo1", email:"123@qq.com", phone:"12345678", address:"345 road"},
                {NGOname: "ngo1", email:"123@qq.com", phone:"12345678", address:"345 road"}]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    // getItem() {
    //
    //     let jsonTarget = []
    //     let ids = "";
    //     // console.log(this.state.todos)
    //     const url="http://localhost:8080/dropoff/" +this.state.zipcode;
    //     fetch(url, {
    //         method: 'get',
    //         // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
    //         //  body: ,
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE',
    //         }
    //     })
    //         .then(res => res.json())
    //         .then(
    //             (res) => {
    //                 // console.log(localStorage.getItem("id"))
    //                 res.forEach(function(item) {
    //                     // console.log(item);
    //                     // jsonTarget.push({id: item.id, email: item.email, notes: item.notes, date: item.date});
    //                     jsonTarget.push({id: item.id, address: item.address.addressLine1 + item.address.addressLine2,
    //                         email: item.email, notes: item.notes, date: item.date});
    //                     // console.log(jsonTarget);
    //                 });
    //                 this.setState(
    //                     {'todos': jsonTarget}
    //                 )
    //                 // console.log(this.state.todos);
    //
    //             },
    //             (error) => {
    //                 this.setState({
    //                     isLoaded: true,
    //                     error
    //
    //                 });
    //
    //             }
    //         )
    //
    // };

    handleChange(e) {
        this.setState({
            zipcode: e.target.value
        })
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
                                    address: item.address.addressLine1 + ',' + item.address.addressLine2 + ',' +item.address.city
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
                <Body showdropoff={this.state.dropoff}/>
                <AboutUsMain />
            </div>
        );
    }
}

export default DropOffApp;