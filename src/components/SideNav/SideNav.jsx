// @flow
import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import styles from './SideNav.scss';

type Defs = {
  menuClick: () => null,
  history: {},
  menuOpen: false,
};

type Props = {
  menuClick: Function,
  history: Object,
  menuOpen: Boolean,
};

type State = {};

export class SideNav extends PureComponent<void, Props, State> {

  defaultProps: Defs;
  state: State;

  handleClick = (url: string) => {
    const { history } = this.props;
    history.push(url);
  }

  handleMenuClick = () => {
    const { menuClick } = this.props;
    menuClick()
  }

  render() {
    const { menuOpen } = this.props;

    return (
      <div className={styles.SideNav}>
        <Drawer open={menuOpen} onClick={this.handleMenuClick}>
          <div className={styles.header} >
            <Typography type="title" color="inherit" className={styles.typography}>
              Menu
            </Typography>
          </div>

          <MenuItem className={styles.menuitem} onClick={() => this.handleClick('/home')}>Home</MenuItem>
          <MenuItem className={styles.menuitem} onClick={() => this.handleClick('/not-found')}>Not Found</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SideNav;