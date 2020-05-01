import React, {Component} from 'react';
import AboutUsMain from "../starter-page/About-us-main";
import TopBar from "../starter-page/TopBar";
import ResidentContactInfo from "../Resident-Address/ResidentContactInfo"
import books from "../../assets/images/books.jpg";

class ResidentAddressApp extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = this.props.router.location.state
        let items = []
        const des = list.des
        const shoplist = list.shopList
        // console.log(des)
        // console.log(shoplist)
        shoplist.forEach(function(item) {
            //{ id: 0, goodName: 'Books', num: 0 , src: books, description: 'Books'},
            items.push({type: item.goodName, quantity: item.num, description: item.description});
        });
        if (items[4].description === "")
           items[4].description = "others";
        else
            items[4].description = des;
        // console.log(JSON.stringify(items))

        return (
            <div>
                <TopBar/>
                <ResidentContactInfo data={items}/>
                <AboutUsMain/>
            </div>
        )
    }
}

export default ResidentAddressApp;