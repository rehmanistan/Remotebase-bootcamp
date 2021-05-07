import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./landing/landing";
import Detail from "./detail/detail";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";
import ResetPassword from "./resetPassword/resetPassword";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/detail" exact component={Detail} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/resetPassword" exact component={ResetPassword} />
      </Switch>
    </Router>
  );
}

export default App;
