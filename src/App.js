import './App.css';
import {Component} from "react";
import UserCurrent from "./Components/UserCurrent";
import PanelMenu from "./Components/PanelMenu";

const User = {
    login:'root',
    email:'test@test.ru'
};

class App extends Component {
    render() {
        return (
            <div className="App">
               <UserCurrent user={User} />
            </div>
        );
    }
}

export default App;

class PanelPortal extends Component {
    render() {
        return (
            <div className="PanelPortal">
                <PanelMenu/>
            </div>
        );
    }
}
