// @flow
import React, { PureComponent, Element } from 'react';
import { blue, lightBlue } from 'material-ui/colors';
import createMuiTheme from 'material-ui/styles/theme';
import createPalette from 'material-ui/styles/palette';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/menu';
import Typography from 'material-ui/Typography';
import SideNav from '_components/SideNav';
import styles from './App.scss';

const muiTheme = createMuiTheme({
  palette: createPalette({
    primary: blue,
    accent: lightBlue,
  }),
});

type Defs = {};

type Props = {
  children: Element<any>,
  history: Object,
  routes: Element<any>,
  store: Object,
  title: String,
  menuOpen: Boolean,
  showMenu: Function,
};

type State = {};

class App extends PureComponent<void, Props, State> {

  defaultProps: Defs;
  state: State;

  toggleSideNav = () => {
    const { showMenu, menuOpen } = this.props;
    showMenu(!menuOpen);
  }

  render() {
    const { children, title, history, menuOpen } = this.props;
    console.log(this)

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className={styles.App}>
          <AppBar position="static" className={styles.appBar}>
            <Toolbar>
              <IconButton onClick={this.toggleSideNav}>
                <MenuIcon className={styles.icon} />
              </IconButton> 


              <Typography type="title" color="inherit" className={styles.flex}>
                { title }
              </Typography>
            </Toolbar>
          </AppBar>

          <div className={styles.content}>
            {children}
          </div>

          <SideNav
            history={history}
            menuOpen={menuOpen}
            menuClick={this.toggleSideNav}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
