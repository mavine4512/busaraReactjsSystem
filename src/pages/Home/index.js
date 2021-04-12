import React from "react";
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
        this.props.history.push("/Form")

    }


    render() {
        return (
           <div className="mainContainer">
               <Login handleSuccessfulAuth={this.handleSuccessfulAuth} />
           </div>
        );
    }
}

