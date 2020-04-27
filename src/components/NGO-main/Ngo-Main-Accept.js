import React, {Component} from 'react';
import TopBar from "../starter-page/TopBar";
import AboutUsMain from "../starter-page/About-us-main";
import ReactDOM from 'react-dom';

class TodoItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input type="checkbox"
                       checked={this.props.data.done}
                       onChange={ () => {
                           this.props.updateHelper(this.props.data.id, !this.props.data.done)
                       } }
                />

                <span>{this.props.data.title}</span>
                <p> </p>
                <div>Description: {this.props.data.desc}</div>
                <p> </p>
                <span>Address: {this.props.data.address}</span>
                <p> </p>
                <div>Date: {this.props.data.date}</div>
                <p> </p>
            </div>
        )
    }
}

class TodoBD extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div>

                {
                    this.props.todoList.filter(item => {
                        const type = this.props.showType;
                        if(type === 1) return item;
                        if(type === 2) return item.done;
                        if(type === 3) return !item.done;
                    }).map(item => {
                        return <TodoItem
                            key={item.id}
                            data={item}
                            updateHelper={this.props.updateItem}

                        />
                    })
                }
            </div>
        )
    }
}

class TodoFT extends React.Component {
    constructor() {
        super();
    }

    render() {
        const list = this.props.todoList;
        return (
            <div>
                <button onClick={() => { this.props.changeType(1) }}
                        className={this.props.type === 1 ? 'active' : null}
                >
                    Accepted Requests ({ list.length })
                </button>

                <button onClick={() => { this.props.changeType(2) }}
                        className={this.props.type === 2 ? 'active' : null}
                >
                    Finished Requests ({ list.filter(item => item.done).length })
                </button>

            </div>
        )
    }
}

class NgoMainAccept extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                { id : 1, title : "Request1", desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-02-2020", address: "1000 1th Ave",done : false},
                { id : 2, title : "Request2",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-03-2020",address: "1000 2th Ave", done : false},
                { id : 3, title : "Request3",desc:" item lists:cloth: 5;book: 10;furniture(small):2",date :"01-04-2020", address: "1000 3th Ave",done : false},
                { id : 4, title : "Request4",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-05-2020",address: "1000 4th Ave", done : false},
                { id : 5, title : "Request5",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-06-2020", address: "1000 5th Ave",done : false},
                { id : 6, title : "Request6",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-07-2020", address: "1000 6th Ave",done : false}
            ],
            type: 1 // 1 - all, 2 - done, 3 - not done
        }
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
                                <TodoBD todoList={ this.state.todos }

                                        updateItem={this.updateItem.bind(this)}
                                        showType={this.state.type}
                                />

                                <TodoFT todoList={this.state.todos}
                                        changeType={this.changeType.bind(this)}
                                        type={this.state.type}
                                />

                            </div>

                        </li>
                    </ul>
                </section>


                <div className= "NGO-submit">
                    <button type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false"
                                                     autocomplete="off">
                    Submit
                    </button>
                </div>
                <AboutUsMain/>
            </div>
        )
    }



    updateItem(id, done) {
        this.setState({
            todos : this.state.todos.map(item => item.id === id ? {...item, done : done} : item )
        });
    }



    changeType(type) {
        this.setState({ type });
    }
}

ReactDOM.render(
    <NgoMainAccept/>,
    document.getElementById('root')
);


export default  NgoMainAccept;

