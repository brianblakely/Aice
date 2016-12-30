// Settings which are not platform-specific.

import React from 'react';

import IconButton from 'material-ui/IconButton';
import IconSettings from 'material-ui/svg-icons/action/settings';

import GeneralSettingsDialog from './general-settings-dialog.jsx';

class GeneralSettings extends React.Component {
  render() {
    return (
      <div>
        <IconButton
          style={{
            position: `absolute`,
            top: `0`,
            right: `0`
          }}
        >
          <IconSettings />
        </IconButton>

        <GeneralSettingsDialog />
      </div>
    );
  }
}

export default GeneralSettings;
