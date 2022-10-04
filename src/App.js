import './App.css';
import {Component} from "react";
import UserCurrent from "./Components/UserCurrent";

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

