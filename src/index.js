import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/starter-page/App';
import * as serviceWorker from './serviceWorker';
import { Router, Route , browserHistory} from 'react-router';
import ResidentApp from './components/resident-page-one/ResidentApp';
import NgoLoginApp from "./components/NGO-Login/NGO-Login-App";
import DropOffApp from "./components/Drop-off/Drop-off-App";
import NgoRegisterApp from "./components/NGO-Register/NGO-Register-App";
import ItemsApp from "./components/Pick-up-item-list/ItemsApp";
import NgoMainApp from "./components/NGO-main/NGO-Main-App";
import NgoAddress from "./components/NGO-Register/NGO-Address";
import ResidentAddressApp from "./components/Resident-Address/Resident-Address-App";
import NgoMainBody from "./components/NGO-main/NGO-Main-App";
import NgoMainFinished from "./components/NGO-main/Ngo-Main-Finished";
import NgoMainAccept from "./components/NGO-main/Ngo-Main-Accept";
import NearbyNgOsApp from "./components/SearchNearbyNGOs/NearbyNGOs-App";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
    (<Router history = {browserHistory}>
        <Route path="/" component={App}/>
        <Route path="/resident" component={ResidentApp} />
        <Route path="/nlogin" component={NgoLoginApp}/>
        <Route path="/nregister" component={NgoRegisterApp}/>
        <Route path="/naddress" component={NgoAddress}/>
        <Route path="/resident/drop" component={DropOffApp}/>
        <Route path="/resident/nearbyNgo" component={NearbyNgOsApp}/>
        <Route path="/resident/items" component={ItemsApp}/>
        <Route path="/ngomain" component={NgoMainApp}/>
        <Route path="/resident/address" component={ResidentAddressApp}/>
            <Route path="/nMainBody" component={NgoMainBody}/>
            <Route path="/nAccept" component={NgoMainAccept}/>
            <Route path="/nFinished" component={NgoMainFinished}/>
        <Route path="/nNgoMain" component={NgoMainBody}/>
    </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
