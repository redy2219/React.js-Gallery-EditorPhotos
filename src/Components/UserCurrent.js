import {Component} from "react";
import {Button, CircularProgress} from "@mui/material";

class UserCurrent extends Component {

    constructor(props) {
        super(props);
        this.state = {user: this.props.user, loader: false};
    }

    cleanFields = () => {
        this.setState({user: {login: '', email: ''}, loader: true});
    }

    render() {
        return (
            <div className="UserCurrent">
                {this.state.loader ?
                    (<CircularProgress/>) :
                    (<><p>User name: {this.state.user.login}</p><p>User email: {this.state.user.email}</p></>)}
                <Button variant="contained" onClick={this.cleanFields}>empty</Button>
            </div>);
    }

}

export default UserCurrent;
