// @flow
import React, { PureComponent, Element } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

type Defs = {
  store: {},
  history: {},
  routes: null,
};

type Props = {
  store: Object,
  history: Object,
  routes: Element<any>,
};

type State = {};

class Root extends PureComponent<void, Props, State> {

  defaultProps: Defs;
  state: State;

  render() {
    const {
      store,
      history,
      routes,
    } = this.props;

    return (
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
    );
  }
}

export default Root;