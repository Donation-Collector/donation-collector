import TopBar from "../starter-page/TopBar";
import React from "react";
import AboutUsMain from "../starter-page/About-us-main";
class NgoMainFinished extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <TopBar/>
                <section className="ngo-main-body">
                    <aside className="main-nav-body">
                        <nav className="main-nav">

                            <a href="/nMainBody" className="main-nav-btn active">
                                Pending Requests
                            </a>
                            <a href="/nAccept" className="main-nav-btn">
                                Accepted Requests
                            </a>
                            <a href="/nFinished" className="main-nav-btn">
                                Finished Requests
                            </a>
                        </nav>
                    </aside>
                    <ul id="request-list">
                        <li className="requests">
                            <div>
                                <p className="request-name">request1</p>
                            </div>
                            <div>
                                item lists: <br/>cloth: 5;book: 10;furniture(small):2
                            </div>
                        </li>
                    </ul>
                </section>
                <AboutUsMain/>
            </div>
        );
    }
}
export  default NgoMainFinished