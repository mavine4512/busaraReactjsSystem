import React,{Component} from "react";
import "./App.scss";
import axios from "axios";
// import Login from "./component/LoginRegistretion";
import Home from "./pages/Home";
import Form from "./pages/Form"

import { BrowserRouter,Route, Switch } from "react-router-dom";

export default  class App extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: 'Not_LOGGED_IN',
            user: {}
        }
    }

    checkLoginStatus() {
        axios
            .get("http://104.248.0.49/api/v1/users/login", { withCredentials: true })
            .then(response => {
                if (
                    response.data.login &&
                    this.state.loggedInStatus === "NOT_LOGGED_IN"
                ) {
                    this.setState({
                        loggedInStatus: "LOGGED_IN",
                        user: response.data.user
                    });
                } else if (
                    !response.data.login &
                    (this.state.loggedInStatus === "LOGGED_IN")
                ) {
                    this.setState({
                        loggedInStatus: "NOT_LOGGED_IN",
                        user: {}
                    });
                }
            })
            .catch(error => {
                console.log("check login error", error);
            });
    }
    componentDidMount() {
        this.checkLoginStatus();
    }

    handleLogout() {
        this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        });
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data.user
        });
    }
    render() {
        return (
            <React.Fragment>
                {/*<Navbar />*/}
                <BrowserRouter>
                <Switch>
                    {/*<Route exact path="/" component={Login}/>*/}
                    <Route
                        exact
                        path={"/"}
                        render={props => (
                            <Home
                                {...props}
                                handleLogin={this.handleLogin}
                                handleLogout={this.handleLogout}
                                loggedInStatus={this.state.loggedInStatus}
                            />
                        )}
                    />
                    <Route
                        exact
                        path={"/dashboard"}
                        render={props => (
                            <Form
                                {...props}
                                loggedInStatus={this.state.loggedInStatus}
                            />
                        )}
                    />
                </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

