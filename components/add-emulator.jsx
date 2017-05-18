// Add a new emulator for use with platforms.

import React from 'react';

import { OSDialog, currentWindow } from '../js/electron.js';

import {Dialog, DialogContent, DialogActions, DialogTitle} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import {Menu, MenuItem} from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import IconFolderOpen from 'material-ui-icons/FolderOpen';

// Material UI Support

import customPropTypes from 'material-ui/utils/customPropTypes';
import { createStyleSheet } from 'jss-theme-reactor';

// Material UI Instancing.

const styleSheet = createStyleSheet(`AddEmulator`, ()=> ({
  root: {
    maxWidth: `304px`
  }
}));

class AddEmulator extends React.Component {
  constructor() {
    super();

    this.classes = this.context.styleManager.render(styleSheet);

    this.emuOptions = [
      `Custom...`,
      `RetroArch`,
      `Dolphin`,
      `ePSXe`,
      `Gens`,
      `higan`,
      `Mednafen`,
      `Mupen64plus`,
      `Nestopia`,
      `PCSXR`,
      `PCSX2`,
      `PPSSPP`,
      `Project64`,
      `Snes9x`,
      `VisualBoyAdvance`,
      `Yabause`,
      `ZSNES`
    ];

    this.emuHandleClick = (e)=> this.setState({
      emuOpen: true,
      emuAnchorEl: e.currentTarget
    });

    this.emuMenuClick = (e, index)=> this.setState({
      emuOpen: false,
      emuSelectedIndex: index,
      emuCustom: index === this.emuOptions.indexOf(`Custom...`),
      emuRetroarch: index === this.emuOptions.indexOf(`RetroArch`)
    });

    this.emuClose = ()=> this.setState({
      emuOpen: false
    });
  }

  render() {
    return (
      <Dialog
        open={false}
        maxWidth="sm"
      >
        <DialogTitle>
          Add a New Emulator
        </DialogTitle>

        <DialogContent>
          <List>
            <ListItem
              button
              onClick={this.emuHandleClick}
            >
              <ListItemText primary={this.emuOptions[this.state.emuSelectedIndex]} />
            </ListItem>
          </List>
          <Menu
            anchorEl={this.state.emuAnchorEl}
            open={this.state.emuOpen}
            onRequestClose={this.state.emuClose}
          >
            {this.emuOptions.map((emu, index)=> {
              return (
                <MenuItem
                  key={emu}
                  selected={index === this.state.emuSelectedIndex}
                  onClick={(e)=> this.emuMenuClick(e, index)}
                >
                  {emu}
                </MenuItem>
              );
            })}
          </Menu><br />

          <TextField
            label="Emulator Name"
            required={this.state.emuCustom}
            disabled={!this.state.emuCustom}
          /><br />

          <TextField
            disabled
          /><br />
          <Button
            onClick={()=> {
              OSDialog.showOpenDialog(currentWindow, {
                title: `Emulator Location`,
                buttonLabel: `Select`,
                properties: [`openFile`, `openDirectory`]
              }, (e)=> {
              });
            }}
          >
            Emulator Location
            <IconFolderOpen />
          </Button><br />

          <TextField
            required={this.state.emuRetroarch}
            disabled={!this.state.emuRetroarch}
          /><br />
          <Button
            onClick={()=> {
              OSDialog.showOpenDialog(currentWindow, {
                title: `RetroArch Core`,
                buttonLabel: `Select`,
                properties: [`openFile`]
              }, (e)=> {
              });
            }}
            disabled={!this.state.emuRetroarch}
          >
            RetroArch Core
            <IconFolderOpen />
          </Button><br />

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
        </DialogContent>

        <DialogActions>
          <Button raised>
            Cancel
          </Button>
          <Button raised>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

AddEmulator.contextTypes = {
  styleManager: customPropTypes.muiRequired
};

export default AddEmulator;
