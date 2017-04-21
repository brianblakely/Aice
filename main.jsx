import electron, { app, BrowserWindow, Menu, shell, dialog } from 'electron';
import path from 'path';
import url from 'url';

// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

app.setName(`Aice`);

const createMenu = ()=> {
  const template = [
    {
      label: `Edit`,
      submenu: [
        {
          role: `undo`
        },
        {
          role: `redo`
        },
        {
          type: `separator`
        },
        {
          role: `cut`
        },
        {
          role: `copy`
        },
        {
          role: `paste`
        },
        {
          role: `pasteandmatchstyle`
        },
        {
          role: `delete`
        },
        {
          role: `selectall`
        }
      ]
    },
    {
      label: `View`,
      submenu: [
        {
          role: `reload`
        },
        {
          role: `toggledevtools`
        },
        {
          type: `separator`
        },
        {
          role: `resetzoom`
        },
        {
          role: `zoomin`
        },
        {
          role: `zoomout`
        },
        {
          type: `separator`
        },
        {
          role: `togglefullscreen`
        }
      ]
    },
    {
      label: `Import`,
      submenu: [
        {
          label: `Platforms / Consoles...`,
          click() {
            dialog.showOpenDialog(mainWindow, {
              title: `Import`,
              buttonLabel: `Import`,
              filters: [{
                name: `Ice Configuration File`,
                extensions: [`txt`]
              }],
              properties: [`openFile`]
            }, (e)=> {
            });
          }
        },
        {
          label: `Emulators...`,
          click() {
            dialog.showOpenDialog(mainWindow, {
              title: `Import`,
              buttonLabel: `Import`,
              filters: [{
                name: `Ice Configuration File`,
                extensions: [`txt`]
              }],
              properties: [`openFile`]
            }, (e)=> {
            });
          }
        },
      ]
    },
    {
      label: `Export`,
      submenu: [
        {
          label: `Platforms / Consoles...`,
          click() {
            dialog.showOpenDialog(mainWindow, {
              title: `Export`,
              buttonLabel: `Export`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }
        },
        {
          label: `Emulators...`,
          click() {
            dialog.showOpenDialog(mainWindow, {
              title: `Export`,
              buttonLabel: `Export`,
              properties: [`openDirectory`]
            }, (e)=> {
            });
          }
        },
      ]
    },
    {
      role: `window`,
      submenu: [
        {
          role: `minimize`
        },
        {
          role: `close`
        }
      ]
    },
    {
      role: `help`,
      submenu: [
        {
          label: `Learn More`,
          click() { shell.openExternal(`http://electron.atom.io`) }
        }
      ]
    }
  ];

  if(process.platform === `darwin`) {
    template.unshift({
      label: app.getName(),
      submenu: [
        {
          role: `about`
        },
        {
          type: `separator`
        },
        {
          role: `services`,
          submenu: []
        },
        {
          type: `separator`
        },
        {
          role: `hide`
        },
        {
          role: `hideothers`
        },
        {
          role: `unhide`
        },
        {
          type: `separator`
        },
        {
          role: `quit`
        }
      ]
    });
    // Edit menu.
    template[1].submenu.push(
      {
        type: `separator`
      },
      {
        label: `Speech`,
        submenu: [
          {
            role: `startspeaking`
          },
          {
            role: `stopspeaking`
          }
        ]
      }
    );
    // Window menu.
    template[5].submenu = [
      {
        label: `Close`,
        accelerator: `CmdOrCtrl+W`,
        role: `close`
      },
      {
        label: `Minimize`,
        accelerator: `CmdOrCtrl+M`,
        role: `minimize`
      },
      {
        label: `Zoom`,
        role: `zoom`
      },
      {
        type: `separator`
      },
      {
        label: `Bring All to Front`,
        role: `front`
      }
    ];
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

const createWindow = ()=> {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreenable: false,
    backgroundColor: `#000`
  });

  mainWindow.maximize();

  // and load the index.html of the app.
  mainWindow.loadURL(
    process.env.NODE_ENV === `development`
      ? `http://localhost:8080/`
      : url.format({
        pathname: path.join(__dirname, `index.html`),
        protocol: `file:`,
        slashes: true
      })
  );

  // Open the DevTools.
  process.env.NODE_ENV === `development` && mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on(`closed`, function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on(`ready`, ()=> {
  if(process.env.NODE_ENV === `development`) {
    BrowserWindow.addDevToolsExtension(`./devtools/react/`);
  }

  createMenu();
  createWindow();
});

// Quit when all windows are closed.
app.on(`window-all-closed`, function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if(process.platform !== `darwin`) {
    app.quit();
  }
});

app.on(`activate`, function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if(mainWindow === null) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
