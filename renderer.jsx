// Styles

import './scss/palette.scss';
import './scss/main.scss';

// Electron

import { remote as electronRemote } from 'electron';

// React

import React from 'react';
import { render } from 'react-dom';

// Services

import Config from './js/config.js';

// UI

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Subheader from 'material-ui/Subheader';
import AppBar from 'material-ui/AppBar';
import IconExclude from 'material-ui/svg-icons/av/not-interested';
import IconImage from 'material-ui/svg-icons/image/image';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia} from 'material-ui/Card';
import { List as VList } from 'react-virtualized';

import PlatformList from './components/platform-list.jsx';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// const aiceThemePalette = Object.assign({}, darkBaseTheme.palette, {
//   primary1Color: `red`,
//   primary2Color: `orange`,
//   primary3Color: `yellow`,
//   accent1Color: `green`,
//   accent2Color: `blue`,
//   accent3Color: `indigo`,
//   textColor: `white`,
//   secondaryTextColor: `brown`,
//   alternateTextColor: `black`,
//   canvasColor: `#262626`,
//   borderColor: `grey`,
//   disabledColor: `beige`,
//   pickerHeaderColor: `teal`,
//   clockCircleColor: `maroon`,
// });

// const aiceTheme = Object.assign({}, darkBaseTheme, {
//   palette: aiceThemePalette
// });

const aiceTheme = darkBaseTheme;

const layout =
  <div style={{
    minHeight: `100vh`
  }}>
    <MuiThemeProvider muiTheme={getMuiTheme(aiceTheme)}>
      <Paper
        zDepth={0}
        rounded={false}
        style={{
          padding: `0 16px 16px`,
          width: `calc(100% - 256px)`,
          minHeight: `100vh`
        }}
      >
        <Subheader
          style={{
            padding: `0`
          }}
        >
          Games
        </Subheader>
        <VList
          width={window.innerWidth -(256 + 16 * 2)}
          height={window.innerHeight}
          rowCount={300}
          rowHeight={345}

          rowRenderer={({
            index,
            key,
            style
          })=> (
            <div key={key} style={Object.assign(style, {
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`
            })}>
              {new Array(2).fill(
                <GridTile
                  title="Blast Corps"
                  subtitle="Nintendo 64"
                  // actionIcon={
                  //   <IconButton
                  //     tooltip="Exclude From Steam"
                  //   >
                  //     <IconExclude />
                  //   </IconButton>
                  // }
                >
                  <img src="images/fpo1.png" />
                </GridTile>
              )}
            </div>
          )}
        />
      </Paper>
    </MuiThemeProvider>

    <PlatformList />
  </div>;

render(layout, document.querySelector(`main`));
