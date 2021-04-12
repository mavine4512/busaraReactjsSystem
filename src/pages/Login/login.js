import React from "react";
import axios from "axios";

export class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        const { username, password } = this.state;

           axios
               .post(
                   "http://104.248.0.49/api/v1/users/login",
                   {
                       user: {
                           username: username,
                           password: password
                       }
                   },
                   { withCredentials: true }
               )
               .then(response => {
                   if (response.data.logged_in) {
                       this.props.handleSuccessfulAuth(response.data);
                   }
               })
               .catch(error => {
                   console.log("login error", error);
               });

        event.preventDefault();
    }


    render() {
        return (
            <div className="mainContainer" ref={this.props.containerRef}>
                <div className="header">Login</div>
                <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" placeholder="Enter username"
                                   onChange={this.handleChange}
                                   required

                            />
                            <div className="textDanger">{this.state.errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter password"
                                   onChange={this.handleChange}
                                   required

                            />
                            <div className="textDanger">{this.state.errors.password}</div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn"
                    >
                        Login
                    </button>
                </div>
                </form>
            </div>
        );
    }
}
