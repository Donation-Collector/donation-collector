import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";
import books from "../../assets/images/books.jpg";
import clothe from "../../assets/images/clothes.jpg";
import furniture from "../../assets/images/furnitures.jpg";
import toy from "../../assets/images/Toys.jpg";
import misce from "../../assets/images/misce.jpg";
class ItemsApp extends Component {
    constructor(props) {
        super();

        this.state = {
            shopList: [
                { id: 0, goodName: 'Books', num: 1 , src: books},
                { id: 1, goodName: 'Clothes',num: 1 , src:clothe},
                { id: 2, goodName: 'Furnitures',num: 1, src:furniture},
                { id: 3, goodName: 'Toys',num: 1, src:toy},
                { id: 4, goodName: 'Others',num: 1, src:misce },

            ]
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
                                    <button type="button" className="add-button btn btn-light" onClick={this.changeNum.bind(this, key, -1)} disabled={item.num < 2 ? 'disabled' : ''}>-</button>
                                    <span className='item-number'>{item.num}</span>
                                    <button className="subtract btn btn-dark"onClick={this.changeNum.bind(this, key, 1)}>+</button>
                                </div>



                            </div>
                        )
                    })
                }


                <a href="/resident/address" className="btn btn-secondary to-address-btn">Next</a>
                <br/>
                <AboutUsMain/>
            </div>
        )
    }
}



export  default  ItemsApp;

