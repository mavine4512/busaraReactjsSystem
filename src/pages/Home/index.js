import React from "react";
import axios from "axios";
import Registration from "../../component/LoginRegistretion";
import Login from "../../component/LoginRegistretion";

export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input:{},
            forms:[]
        };
    }
    handleSuccessfulAuth(data) {
        this.props.handleLogin(data);

        this.props.history.push("/home")

    }
    // handleLogoutClick() {
    //     axios
    //         .delete("http://localhost:3001/logout", { withCredentials: true })
    //         .then(response => {
    //             this.props.handleLogout();
    //         })
    //         .catch(error => {
    //             console.log("logout error", error);
    //         });
    // }

    render() {
        return (
           <div className="mainContainer">
               <div className="mainContainerHeader">Data collection form</div>
               <div><h4>Status: {this.props.loggedInStatus}</h4>
                   <h4>
                       <button onClick={() => this.handleLogoutClick()}>Logout</button>
                       <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                       <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
                   </h4>
               </div>

           </div>

        );
    }
}

