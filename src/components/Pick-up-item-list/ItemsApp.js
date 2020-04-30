import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";
import books from "../../assets/images/books.jpg";
import clothe from "../../assets/images/clothes.jpg";
import furniture from "../../assets/images/furnitures.jpg";
import toy from "../../assets/images/Toys.jpg";
import misce from "../../assets/images/misce.jpg";
import Link from "react-router/lib/Link";
class ItemsApp extends Component {
    constructor(props) {
        super();

        this.state = {
            shopList: [
                { id: 0, goodName: 'Books', num: 0 , src: books, description: 'books'},
                { id: 1, goodName: 'Clothes',num: 0 , src:clothe, description: 'clothes'},
                { id: 2, goodName: 'Furnitures',num: 0, src:furniture, description: 'furnitures'},
                { id: 3, goodName: 'Toys',num: 0, src:toy, description: 'toys'},
                { id: 4, goodName: 'Others',num: 0, src:misce, description: 'others'},
            ],
            des: ""
        }
    }

    //修改数据
    changeNum(index, num) {
        // console.log(index,num)
        this.state.shopList[index].num += num;

        this.setState({
            shopList: this.state.shopList
        })

    }

    changeHandler = (e) => {
        // this.setState({[e.target.name]: e.target.value})
        this.setState({[e.target.name] : e.target.value})

    }

    // //删除数据
    // delect = (index) => {
    //     //删除数据
    //     this.state.shopList.splice(index, 1)
    //
    //     this.setState({
    //         shopList: this.state.shopList
    //     })
    //
    // }

    render() {

        const {des}= this.state;
        return (
            <div>
                <TopBar/>
                <h3 className="header">Donation List</h3>

                <div className="DonationListHeader" align="center" >Donation Items</div>


                {
                    this.state.shopList.map((item, key) => {
                        return (<div className="collection-item" key={item.id}>
                                    <div className="goodname">{item.goodName}</div>
                                    <img src={item.src}  width = "400" height = "300" className="rounded mx-auto d-block" alt="itemImg"/>
                                    <div className="button-position-type">
                                        <button type="button" className="add-button btn btn-light" onClick={this.changeNum.bind(this, key, -1)} disabled={item.num < 1 ? 'disabled' : ''}>-</button>
                                        <span className='item-number'>{item.num}</span>
                                        <button className="subtract btn btn-dark"onClick={this.changeNum.bind(this, key, 1)}>+</button>
                                    </div>
                                </div>
                                )
                    })
                }
                <div className="description">
                    <div>Type(ex: shoes)</div>
                    <input type="text" name="des"
                           value={des}
                           onChange={this.changeHandler}/>
                </div>


                {/*<a href="/resident/address" className="btn btn-secondary to-address-btn">Next</a>*/}
                <div className="next-button">
                    <Link className="btn btn-secondary to-address-btn"
                        to={{
                            pathname: '/resident/address',
                            state: this.state
                        }}>Next
                    </Link>
                </div>
                <br/>
                <AboutUsMain/>
            </div>
        )
    }
}



export  default  ItemsApp;

