import './scss/palette.scss';
import './scss/main.scss';

import React from 'react';
import { render } from 'react-dom';

import { grey400 } from 'material-ui/styles/colors.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const layout =
  <div style={{
    height: `100%`
  }}>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Paper style={{
        height: `100%`
      }}>
        <Paper style={{
          width: `300px`,
          height: `200px`
        }}>

        </Paper>
      </Paper>
    </MuiThemeProvider>
    <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      <Drawer open={true} openSecondary={true}>
        <Subheader>Platforms</Subheader>
        <List>
          <ListItem primaryText="Super Nintendo" />
          <ListItem primaryText="Nintendo 64" />
          <ListItem primaryText="Add New Platform" rightIcon={<ContentAdd />} />
        </List>

        <Paper zDepth={2} style={{
          minHeight: `300px`,
          height: `50%`,
          backgroundColor: grey400
        }}>

        </Paper>
      </Drawer>
    </MuiThemeProvider>
  </div>;

render(layout, document.querySelector(`main`));
