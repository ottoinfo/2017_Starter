import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import LayoutRoute from '_components/LayoutRoute';
import AppContainer from '_containers/App';

import Home from '_views/Home';
import NotFound from '_views/NotFound';

export const desktop = (
  <div>
    <Switch>
      <LayoutRoute path='/home' layout={AppContainer} component={Home} title='Home' />
      <Route exact path='/' render={() => ( <Redirect to="/home" push /> )} />
      <LayoutRoute layout={AppContainer} component={NotFound} title='Not Found' />
    </Switch>
  </div>
);
