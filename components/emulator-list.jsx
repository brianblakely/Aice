// Select emulator to use for a platform.

import React from 'react';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import AddEmulator from './add-emulator.jsx';

class EmulatorList extends React.Component {
  render() {
    return (
      <div>
        <SelectField
          floatingLabelText="Emulator"
          errorText={window.error && `This field is required`}
        >
          <MenuItem value={2} primaryText="RetroArch" />
          <MenuItem value={5} primaryText="Project64" />
          <MenuItem value={2} primaryText="Dolphin" />
          <MenuItem value={3} primaryText="ePSXe" />
          <MenuItem value={1} primaryText="Add New..." />
        </SelectField>

        <AddEmulator />
      </div>
    );
  }
}

export default EmulatorList;
