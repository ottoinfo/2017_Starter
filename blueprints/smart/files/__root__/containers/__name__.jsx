// @flow
import React, { PureComponent } from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';

type Defs = {};

type Props = {};

type State = {};

export class <%= pascalEntityName %> extends PureComponent<void, Props, State> {

  defaultProps: Defs;
  state: State;

  render() {
    return (
      <p>Component</p>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>);
