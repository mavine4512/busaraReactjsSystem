import React from "react";
// import axios from "axios";

const Form = props => {

  // handleLogoutClick()=> {
  //       axios
  //           .delete("http://localhost:3001/logout", { withCredentials: true })
  //           .then(response => {
  //               this.props.handleLogout();
  //           })
  //           .catch(error => {
  //               console.log("logout error", error);
  //           });
  //   }
    return (
        <div>
            <div>
                <h1>Dashboard</h1>
                <h1>Status: {props.loggedInStatus}</h1>
                {/*<button onClick={() => this.handleLogoutClick()}>Logout</button>*/}
            </div>
        </div>
    );
};

export default Form;
