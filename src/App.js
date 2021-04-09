import React from "react";
import "./App.scss";

import Login from "./component/LoginRegistretion";
// import Rooms from "./Pages/Rooms";
// import SingleRoom from "./Pages/SingleRoom";
// import Error from "./Pages/Error";
// import Navbar from "./Components/Navbar";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
      <React.Fragment>
        {/*<Navbar />*/}
        <Switch>
          <Route exact path="/" component={Login} />
          {/*<Route exact path="/rooms/" component={Rooms} />*/}
          {/*<Route exact path="/rooms/:single" component={SingleRoom} />*/}
          {/*<Route component={Error} />*/}
        </Switch>
      </React.Fragment>
  );
}

export default App;
