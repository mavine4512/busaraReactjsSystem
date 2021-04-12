import React from "react";
import axios from "axios";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email: "",
            password: "",
            password_confirmation: "",
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
        const { username,email, password, password_confirmation } = this.state;

            axios
                .post(
                    "http://104.248.0.49/api/v1/users/registration/",
                    {
                        user: {
                            username:username,
                            email: email,
                            password: password,
                            password_confirmation: password_confirmation
                        }
                    },
                    { withCredentials: true }
                )
                .then(response => {
                    if (response.data.status === "created") {
                        this.props.handleSuccessfulAuth(response.data);
                    }
                })
                .catch(error => {
                    console.log("registration error", error);
                });

        event.preventDefault();
    }


    render() {
        return (
            <div className="mainContainer" ref={this.props.containerRef}>
                <div className="header">Register</div>
                <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <div className="form" >
                        <div className="form-group">
                            <label htmlFor="username">User Name</label>
                            <input type="text" name="username" placeholder="Enter username"
                                   value={this.state.username.name}
                                   onChange={this.handleChange}
                                   required
                            />
                            <div className="textDanger">{this.state.errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Enter email"
                                   value={this.state.email}
                                   onChange={this.handleChange}
                                   required
                            />
                            <div className="textDanger">{this.state.errors.email}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter password"
                                   value={this.state.password}
                                   onChange={this.handleChange}
                                   required
                            />
                            <div className="textDanger">{this.state.errors.password}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm password</label>
                            <input type="password" name="password_confirmation" placeholder="Confirm password"
                                   value={this.state.password_confirmation}
                                   onChange={this.handleChange}
                                   required
                            />
                            <div className="textDanger">{this.state.errors.password}</div>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <button type="submit" className="btn">
                        Register
                    </button>
                </div>
            </form>
            </div>
        );
    }
}
