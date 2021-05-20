import React from 'react';
import { Switch, Route } from 'react-router-dom';
import login from '../pages/Login';
import { NotFound } from '../pages/NotFound';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={login} />
    <Route path="/*" component={NotFound}/>
  </Switch>
);

export default Routes;