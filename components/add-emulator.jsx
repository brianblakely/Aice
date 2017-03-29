// Add a new emulator for use with platforms.

import React from 'react';

import { OSDialog, currentWindow } from '../js/electron.js';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconFolderOpen from 'material-ui/svg-icons/file/folder-open';

class AddEmulator extends React.Component {
  render() {
    return (
      <Dialog
        title="Add a New Emulator"
        actions={[
          <RaisedButton
            label="Cancel"
          />,
          <RaisedButton
            label="Add"
          />
        ]}
        modal={false}
        open={false}
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
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Emulator Location`,
              buttonLabel: `Select`,
              properties: [`openFile`, `openDirectory`]
            }, (e)=> {
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
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `RetroArch Core`,
              buttonLabel: `Select`,
              properties: [`openFile`]
            }, (e)=> {
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
    );
  }
}

export default AddEmulator;
