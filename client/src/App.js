import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./landing/landing";
import PostDetail from "./postDetail/postDetail";
import NewPost from "./newPost/newPost";
import SignIn from "./signin/signin";
import SignUp from "./signup/signup";
import ResetPassword from "./resetPassword/resetPassword";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/post/:id" exact component={PostDetail} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/signUp" exact component={SignUp} />
        <Route path="/createPost" exact component={NewPost} />
        {/*<Route path="/signOut" exact component={getUser} />
        <Route path="/user/:id" exact component={getUser} />
        <Route path="/resetPassword" exact component={ResetPassword} /> */}
      </Switch>
    </Router>
  );
}
