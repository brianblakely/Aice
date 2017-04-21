// Styles

import './scss/palette.scss';
import './scss/main.scss';

// Electron

import { remote as electronRemote } from 'electron';

// React

import React from 'react';
import { render } from 'react-dom';

// Material UI

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import AppBar from 'material-ui/AppBar';
import IconExclude from 'material-ui-icons/NotInterested';
import IconImage from 'material-ui-icons/Image';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import {Card, CardContent} from 'material-ui/Card';
import Text from 'material-ui/Text';
import { List as VList } from 'react-virtualized';

// Components

// import PlatformList from './components/platform-list.jsx';

// Material UI Support

import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Material UI Instancing.

const styleSheet = createStyleSheet(`AIce`, ()=> ({
  root: {
    minHeight: `100vh`
  },
  mainPane: {
    padding: `0 16px 16px`,
    width: `calc(100% - 256px)`,
    minHeight: `100vh`
  },
  mainPaneTitle: {
    padding: `0`
  },
  gameListRow: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `space-between`
  }
}));

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

// const aiceTheme = darkBaseTheme;

function AIce(props, context) {
  const classes = context.styleManager.render(styleSheet);

  return (
    <div className={classes.root}>
        <Paper
          elevation={0}
          className={classes.mainPane}
        >
          <Text
            type="headline"
            className={classes.mainPaneTitle}
          >
            Games
          </Text>
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
              <div key={key} className={classes.gameListRow} style={style}>
                {new Array(2).fill(
                  <Card>
                    <CardContent>
                      <Text type="headline">
                        Blast Corps
                      </Text>
                      <Text type="subheading">
                        Nintendo 64
                      </Text>
                    </CardContent>

                    <IconButton title="Use Custom Image">
                      <IconImage />
                    </IconButton>

                    <IconButton title="Exclude From Steam">
                      <IconExclude />
                    </IconButton>

                    <img src="images/fpo1.png" />
                  </Card>
                )}
              </div>
            )}
          />
        </Paper>

      {/*<PlatformList />*/}
    </div>
  );
}

AIce.contextTypes = {
  styleManager: customPropTypes.muiRequired
};

render(<MuiThemeProvider><AIce /></MuiThemeProvider>, document.querySelector(`main`));
