// Platform settings.

import React from 'react';

import { OSDialog, currentWindow } from '../js/electron.js';

// UI.

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconFolderOpen from 'material-ui/svg-icons/file/folder-open';

import EmulatorList from './emulator-list.jsx';
import FileExtensions from './file-extensions.jsx';

class PlatformSettings extends React.Component {
  render() {
    return (
      <div>
        <TextField
          floatingLabelText="Steam Category Label"
          errorText={window.error && `This field is required`}
        /><br />

        <TextField
          floatingLabelText="Nickname"
        /><br />

        <EmulatorList />

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
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `ROM Folder`,
              buttonLabel: `Select`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }}
        />

        <FileExtensions />

        <TextField
          name="fallback-icons-folder"
          floatingLabelText=""
          disabled={true}
        /><br />
        <FlatButton
          label="Fallback Icons Folder"
          labelPosition="before"
          primary={true}
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Fallback Icons Folder`,
              buttonLabel: `Select`,
              properties: [`openDirectory`]
            }, (e)=> {
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
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Default Icon`,
              buttonLabel: `Select`,
              filters: [{
                name: `Steam Grid Icon`,
                extensions: [`png`, `jpg`, `tga`]
              }],
              properties: [`openFile`]
            }, (e)=> {
            });
          }}
        />
      </div>
    );
  }
}

export default PlatformSettings;
