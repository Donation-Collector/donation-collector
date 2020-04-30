import TopBar from "../starter-page/TopBar";
import React from "react";
import AboutUsMain from "../starter-page/About-us-main";

const id = localStorage.getItem("id")
console.log(id)
const url = 'http://localhost:8080/history/' + id
console.log(url)

class TodoItem extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>

                <span>Request id: {this.props.data.id}</span>
                <p> </p>
                <div>Email: {this.props.data.email}</div>
                <p> </p>
                <span>Notes: {this.props.data.notes}</span>
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
                    this.props.todoList.map(item => {
                        return <TodoItem
                            key={item.id}
                            data={item}
                        />
                    })
                }
            </div>
        )
    }
}




class NgoMainFinished extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                // { id : 1, title : "Request1", desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-02-2020", address: "1000 1th Ave",done : false},
                // { id : 2, title : "Request2",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-03-2020",address: "1000 2th Ave", done : false},
                // { id : 3, title : "Request3",desc:" item lists:cloth: 5;book: 10;furniture(small):2",date :"01-04-2020", address: "1000 3th Ave",done : false},
                // { id : 4, title : "Request4",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-05-2020",address: "1000 4th Ave", done : false},
                // { id : 5, title : "Request5",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-06-2020", address: "1000 5th Ave",done : false},
                // { id : 6, title : "Request6",desc:" item lists:cloth: 5;book: 10;furniture(small):2", date :"01-07-2020", address: "1000 6th Ave",done : false}
            ],
            // type: 1 // 1 - all, 2 - done, 3 - not done
        }

    }
    componentWillMount() {
        this.getItem()
    }


    getItem() {
        let jsonTarget = []
        console.log(this.state.todos)
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

                    res.forEach(function(item) {
                        console.log(item);
                        jsonTarget.push({id: item.id, email: item.email, notes: item.notes, date: item.date});
                        console.log(jsonTarget);
                    });
                    this.setState(
                        {'todos': jsonTarget}
                    )
                    console.log(this.state.todos);

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error

                    });

                }
            )

    };


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
                                />
                            </div>
                            <div>
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


// import TopBar from "../starter-page/TopBar";
// import React from "react";
// import AboutUsMain from "../starter-page/About-us-main";
// class NgoMainFinished extends React.Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         return (
//             <div>
//                 <TopBar/>
//                 <section className="ngo-main-body">
//                     <aside className="main-nav-body">
//                         <nav className="main-nav">
//
//                             <a href="/nMainBody" className="main-nav-btn active">
//                                 Pending Requests
//                             </a>
//                             <a href="/nAccept" className="main-nav-btn">
//                                 Accepted Requests
//                             </a>
//                             <a href="/nFinished" className="main-nav-btn">
//                                 Finished Requests
//                             </a>
//                         </nav>
//                     </aside>
//                     <ul id="request-list">
//                         <li className="requests">
//                             <div>
//                                 <p className="request-name">request1</p>
//                             </div>
//                             <div>
//                                 item lists: <br/>cloth: 5;book: 10;furniture(small):2
//                             </div>
//                         </li>
//                     </ul>
//                 </section>
//                 <AboutUsMain/>
//             </div>
//         );
//     }
// }
// export  default NgoMainFinished