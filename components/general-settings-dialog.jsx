// Modal form for general settings.

import React from 'react';

import { OSDialog, currentWindow } from '../js/electron.js';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import IconFolderOpen from 'material-ui/svg-icons/file/folder-open';

class GeneralSettingsDialog extends React.Component {
  render() {
    return (
      <Dialog
        title="General Settings"
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
        <TextField
          name="base-rom-folder"
          floatingLabelText=""
          disabled={true}
        /><br />
        <FlatButton
          label="Base ROM Folder"
          labelPosition="before"
          primary={true}
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Base ROM Folder`,
              buttonLabel: `Select`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }}
        /><br />

        <TextField
          name="backup-folder"
          floatingLabelText=""
          disabled={true}
        /><br />
        <FlatButton
          label="Backup Folder"
          labelPosition="before"
          primary={true}
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Backup Folder`,
              buttonLabel: `Select`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }}
        /><br />

        <TextField
          name="steam-userdata-folder"
          floatingLabelText=""
          disabled={true}
        /><br />
        <FlatButton
          label="Steam userdata Folder"
          labelPosition="before"
          primary={true}
          icon={<IconFolderOpen />}
          onClick={()=> {
            OSDialog.showOpenDialog(currentWindow, {
              title: `Steam userdata Folder`,
              buttonLabel: `Select`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }}
        /><br />

        <TextField
          floatingLabelText="Image Sources"
          defaultValue="local, consolegrid"
          disabled={true}
        />
      </Dialog>
    );
  }
}

export default GeneralSettingsDialog;
