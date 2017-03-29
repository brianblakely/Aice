// Associate file extensions with a platform.

import React from 'react';

import TextField from 'material-ui/TextField';
import Chip from 'material-ui/Chip';

class FileExtensions extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default FileExtensions;
