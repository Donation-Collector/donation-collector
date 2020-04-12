import React, {Component} from 'react';
import TopBar from "./TopBar";
import Body from "./Body";
import Tail from "./Tail";

class DropOffApp extends Component {
    render() {
        return (
            <div>
                <TopBar />
                <Body />
                <Tail />
            </div>
        );
    }
}

export default DropOffApp;