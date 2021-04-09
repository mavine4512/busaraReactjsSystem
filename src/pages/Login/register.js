import React from "react";

export class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: {},
            errors: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let input = this.state.input;
        input[event.target.name] = event.target.value;

        this.setState({
            input
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        if(this.validate()){
            console.log(this.state);

            let input = {};
            input["username"] = "";
            input["email"] = "";
            input["password"] = "";
            this.setState({input:input});

            alert('Form submited successfully',);
        }
    }


    validate(){
        let input = this.state.input;
        let errors = {};
        let isValid = true;

        if (!input["username"]) {
            isValid = false;
            errors["username"] = "Please enter your username.";
        }

        if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your email Address.";
        }

        if (typeof input["email"] !== "undefined") {

            let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
                isValid = false;
                errors["email"] = "Please enter valid email address.";
            }
        }

        if (!input["password"]) {
            isValid = false;
            errors["password"] = "Please enter your password.";
        }

        this.setState({
            errors: errors
        });

        return isValid;
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
                                   value={this.state.input.name}
                                   onChange={this.handleChange}
                            />
                            <div className="textDanger">{this.state.errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" placeholder="Enter email"
                                   onChange={this.handleChange}
                            />
                            <div className="textDanger">{this.state.errors.email}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="text" name="password" placeholder="Enter password"
                                   onChange={this.handleChange}
                            />
                            <div className="textDanger">{this.state.errors.password}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirmpassword">Confirm password</label>
                            <input type="text" name="password" placeholder="Confirm password"
                                   onChange={this.handleChange}
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
