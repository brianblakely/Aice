// Styles

import './scss/palette.scss';
import './scss/main.scss';

// Electron

import { remote as electronRemote } from 'electron';

// React

import React from 'react';
import { render } from 'react-dom';

// Material UI

import { grey400 } from 'material-ui/styles/colors.js';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import { List, ListItem, makeSelectable } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import FolderOpen from 'material-ui/svg-icons/file/folder-open';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Chip from 'material-ui/Chip';
import Dialog from 'material-ui/Dialog';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const { dialog } = electronRemote;

const win = electronRemote.getCurrentWindow();

const SelectableList = makeSelectable(List);

const dialogActions = [
  <RaisedButton
    label="Cancel"
  />,
  <RaisedButton
    label="Add"
  />,
];

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
        <SelectableList defaultValue={1} onChange={()=>{}}>
          <ListItem primaryText="Super Nintendo" value={1} />
          <ListItem primaryText="Nintendo 64" value={2} />
          <ListItem primaryText="Add New Platform" value={3} rightIcon={<ContentAdd />} />
        </SelectableList>

        <Paper zDepth={2} style={{
          backgroundColor: grey400
        }}>
          <TextField
            floatingLabelText="Steam Category Label"
            errorText={window.error && `This field is required`}
          /><br />
          <TextField
            floatingLabelText="Nickname"
          /><br />
          <SelectField
            floatingLabelText="Emulator"
            errorText={window.error && `This field is required`}
          >
            <MenuItem value={2} primaryText="RetroArch" />
            <MenuItem value={5} primaryText="Project64" />
            <MenuItem value={2} primaryText="Dolphin" />
            <MenuItem value={3} primaryText="ePSXe" />
            <MenuItem value={1} primaryText="Add New..." />
          </SelectField><br />
          <Dialog
            title="Add a New Emulator"
            actions={dialogActions}
            modal={false}
            open={true}
            autoScrollBodyContent={true}
            contentStyle={{
              maxWidth: `304px`
            }}
          >
            <SelectField
              floatingLabelText="Emulator"
              errorText={window.error && `This field is required`}
            >
              <MenuItem value={1} primaryText="Custom..." />
              <MenuItem value={2} primaryText="RetroArch" />
              <MenuItem value={2} primaryText="Dolphin" />
              <MenuItem value={3} primaryText="ePSXe" />
              <MenuItem value={4} primaryText="Gens" />
              <MenuItem value={5} primaryText="higan" />
              <MenuItem value={5} primaryText="Mednafen" />
              <MenuItem value={5} primaryText="Mupen64plus" />
              <MenuItem value={5} primaryText="Nestopia" />
              <MenuItem value={5} primaryText="PCSXR" />
              <MenuItem value={5} primaryText="PCSX2" />
              <MenuItem value={5} primaryText="PPSSPP" />
              <MenuItem value={5} primaryText="Project64" />
              <MenuItem value={5} primaryText="Snes9x" />
              <MenuItem value={5} primaryText="VisualBoyAdvance" />
              <MenuItem value={5} primaryText="Yabause" />
              <MenuItem value={5} primaryText="ZSNES" />
            </SelectField><br />
            <TextField
              floatingLabelText="Emulator Name"
              errorText={window.customEmu && `This field is required`}
              disabled={!window.customEmu}
            /><br />
            <TextField
              name="emulator-location"
              floatingLabelText=""
              errorText={window.error && `This field is required`}
              disabled={true}
            /><br />
            <FlatButton
              label="Emulator Location"
              labelPosition="before"
              primary={true}
              icon={<FolderOpen />}
              onClick={()=> {
                dialog.showOpenDialog(win, {
                  title: `Emulator Location`,
                  buttonLabel: `Select`,
                  properties: [`openFile`, `openDirectory`]
                }, (e)=> {
                  console.log(`e`, e);
                });
              }}
            /><br />
            <TextField
              name="retroarch-core"
              floatingLabelText=""
              errorText={window.retroarch && `This field is required`}
              disabled={!window.retroarch}
            /><br />
            <FlatButton
              label="RetroArch Core"
              labelPosition="before"
              primary={true}
              icon={<FolderOpen />}
              onClick={()=> {
                dialog.showOpenDialog(win, {
                  title: `RetroArch Core`,
                  buttonLabel: `Select`,
                  properties: [`openFile`]
                }, (e)=> {
                  console.log(`e`, e);
                });
              }}
              disabled={!window.retroarch}
            /><br />
            <TextField
              floatingLabelText="RetroArch Core Name"
              errorText={window.retroarch && `This field is required`}
              disabled={!window.retroarch}
            /><br />
            <TextField
              floatingLabelText="Command"
              errorText={window.customEmu && `This field is required`}
              disabled={!window.customEmu}
            />
          </Dialog>
          <TextField
            name="rom-folder"
            floatingLabelText=""
            errorText={window.error && `This field is required`}
            disabled={true}
          /><br />
          <FlatButton
            label="ROM Folder"
            labelPosition="before"
            primary={true}
            icon={<FolderOpen />}
            onClick={()=> {
              dialog.showOpenDialog(win, {
                title: `ROM Folder`,
                buttonLabel: `Select`,
                properties: [`openDirectory`]
              }, (e)=> {
                console.log(`e`, e);
              });
            }}
          />
          <TextField
            hintText="File Extensions"
          /><br />
          <div style={{
            display: `flex`,
            flexWrap: `wrap`,
          }}>
            <Chip
              onRequestDelete={()=>{}}
              style={{
                margin: `4px`
              }}
            >
              sfc
            </Chip>
            <Chip
              onRequestDelete={()=>{}}
              style={{
                margin: `4px`
              }}
            >
              smc
            </Chip>
          </div>
          <TextField
            name="fallback-icons-folder"
            floatingLabelText=""
            disabled={true}
          /><br />
          <FlatButton
            label="Fallback Icons Folder"
            labelPosition="before"
            primary={true}
            icon={<FolderOpen />}
            onClick={()=> {
              dialog.showOpenDialog(win, {
                title: `Fallback Icons Folder`,
                buttonLabel: `Select`,
                properties: [`openDirectory`]
              }, (e)=> {
                console.log(`e`, e);
              });
            }}
          />
          <TextField
            floatingLabelText="Game Title Prefix"
          /><br />
          <TextField
            name="default-icon"
            floatingLabelText=""
            disabled={true}
          /><br />
          <FlatButton
            label="Default Icon"
            labelPosition="before"
            primary={true}
            icon={<FolderOpen />}
            onClick={()=> {
              dialog.showOpenDialog(win, {
                title: `Default Icon`,
                buttonLabel: `Select`,
                filters: [{
                  name: `Steam Grid Icon`,
                  extensions: [`png`, `jpg`, `tga`]
                }],
                properties: [`openFile`]
              }, (e)=> {
                console.log(`e`, e);
              });
            }}
          />
        </Paper>
      </Drawer>
    </MuiThemeProvider>
  </div>;

render(layout, document.querySelector(`main`));
