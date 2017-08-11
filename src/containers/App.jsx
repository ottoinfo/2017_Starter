// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AppLayout from '_layouts/App';
import { showMenu } from '_redux/actions/app';

type Defs = {
  menuOpen: false,
  showMenu: () => {},
};

type Props = {
  menuOpen: Boolean,
  showMenu: Function,
};

type State = {};

export class App extends PureComponent<void, Props, State> {

  defaultProps: Defs;
  state: State;

  componentWillMount () {}

  render() {
    const { props } = this;

    return (
      <AppLayout {...props} />
    );
  }
}

const mapStateToProps = (state) => ({
  menuOpen: state.app.get('showMenu'),
});
const mapDispatchToProps = {
  showMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
