import { app, BrowserWindow, ipcMain, screen, IpcMessageEvent } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { exec } from 'child_process';

let serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

let win: Electron.BrowserWindow = null;

const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const debugMode = isEnvSet
  ? getFromEnv
  : process.defaultApp ||
    /node_modules[\\/]electron[\\/]/.test(process.execPath);

/**
 * Electron window settings
 */
const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
  frame: true,
  resizable: true,
  focusable: true,
  fullscreenable: true,
  kiosk: false,
  // to hide title bar, uncomment:
  // titleBarStyle: 'hidden',
  webPreferences: {
    devTools: debugMode,
    nodeIntegration: debugMode
  }
};

/**
 * Hooks for electron main process
 */
function initMainListener() {
  ipcMain.on('ELECTRON_BRIDGE_HOST', (event, msg) => {
    console.log('msg received', msg);
    if (msg === 'ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
    }
  });
}

/**
 * Create main window presentation
 */
function createWindow() {
  const sizes = screen.getPrimaryDisplay().workAreaSize;

  if (debugMode) {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

    mainWindowSettings.width = 800;
    mainWindowSettings.height = 600;
  } else {
    mainWindowSettings.width = sizes.width;
    mainWindowSettings.height = sizes.height;
    mainWindowSettings.x = 0;
    mainWindowSettings.y = 0;
  }

  win = new BrowserWindow(mainWindowSettings);

  let launchPath;
  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/../../../node_modules/electron`)
    });
    launchPath = 'http://localhost:4200';
    win.loadURL(launchPath);
  } else {
    launchPath = url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    });
    win.loadURL(launchPath);
  }

  console.log('launched electron with:', launchPath);

  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  initMainListener();

  initTerminalListener();

  if (debugMode) {
    // Open the DevTools.
    win.webContents.openDevTools();
    // client.create(applicationRef);
  }
}

try {
  app.on('ready', createWindow);

  app.on('window-all-closed', quit);

  ipcMain.on('quit', quit);

  ipcMain.on('minimize', () => {
    win.minimize();
  });

  ipcMain.on('maximize', () => {
    win.maximize();
  });

  ipcMain.on('restore', () => {
    win.restore();
  });

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });
} catch (err) {}

function quit() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
}

/* tslint:disable */
function initTerminalListener(){
  ipcMain.handle('sync', async (event, arg) => {
    return new Promise((resolve, reject) => {
      exec(arg, (error, stdout, stderr) => {
        if (error) {
          console.warn(error);
        }
        resolve({Error: error, stdOut: stdout, stdErr: stderr});
      });
    });
  });

/*  ipcMain.on('async', (event, arg) => {
    exec(arg, (err: Error, stdout: string | Buffer, stderr: string | Buffer) => {
      event.sender.send('asyncRes', {Error: err, stdOut: stdout, stdErr: stderr});
      if(err){
        return;
      }
    });
  });*/
}
/* tslint:enable */
