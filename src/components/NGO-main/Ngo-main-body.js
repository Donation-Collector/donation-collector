import React, {Component} from 'react';

class NgoMainBody extends Component {
    render() {
        return (
            <section className="ngo-main-body">
                <aside className="main-nav-body">
                    <nav className="main-nav">
                        <a href="#" className="main-nav-btn active">
                            Pending Requests
                        </a>
                        <a href="#" className="main-nav-btn">
                            Accepted Requests
                        </a>
                        <a href="#" className="main-nav-btn">
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
        );
    }
}

export default NgoMainBody;