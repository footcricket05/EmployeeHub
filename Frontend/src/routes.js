import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import UserItem from "./components/UserItem";
import newMember from "./components/newMember";
import MemberEdit from "./components/MemberEdit";
import profile from "./components/profile";

import history from "./history";

const Routes = () => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={UserItem} />
          <Route path="/addMember" component={newMember} />
          <Route path="/editMember/:name" component={MemberEdit} />
          <Route path="/profile" component={profile} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
