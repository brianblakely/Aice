// Platforms panel.

import React from 'react';

// UI

import theme from '../js/theme.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Drawer from 'material-ui/Drawer';
import Subheader from 'material-ui/Subheader';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import IconContentAdd from 'material-ui/svg-icons/content/add';

import PlatformSettings from './platform-settings.jsx';
import GeneralSettings from './general-settings.jsx';

const SelectableList = makeSelectable(List);

class PlatformList extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Drawer open={true} openSecondary={true}>
          <Subheader>Platforms</Subheader>

          <SelectableList defaultValue={1} onChange={()=>{}}>
            <ListItem primaryText="Super Nintendo" value={1} />
            <ListItem primaryText="Nintendo 64" value={2} />
            <ListItem primaryText="Add New Platform" value={3} rightIcon={<IconContentAdd />} />
          </SelectableList>

          <PlatformSettings />

          <GeneralSettings />
        </Drawer>
      </MuiThemeProvider>
    );
  }
}

export default PlatformList;
