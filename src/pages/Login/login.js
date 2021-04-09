import React from "react";

export class Login extends React.Component {
    constructor(props) {
        super(props)
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
                <div className="header">Login</div>
                <form onSubmit={this.handleSubmit}>
                <div className="content">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Enter username"
                                   onChange={this.handleChange}
                            />
                            <div className="textDanger">{this.state.errors.username}</div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Enter password"
                                   onChange={this.handleChange}
                            />
                            <div className="textDanger">{this.state.errors.password}</div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>
                </form>
            </div>
        );
    }
}
