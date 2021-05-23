import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { NotFound } from '../pages/NotFound';
import { Register } from '../pages/Register';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" exact component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Routes;