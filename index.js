const Path = require('path');
require('update-electron-app')({
  repo: 'github-fcy-nienan/fcy',
  updateInterval: '5 minutes',
})

const {app,Menu,BrowserWindow} = require('electron')
const runServer = require('./webserver')

// const setupEvents = require('./installers/setupEvents')
// if (setupEvents.handleSquirrelEvent()) {
//   // squirrel event handled and app will exit in 1000ms, so don't do anything else
//   return;
// }

let mainWindow
runServer();



function createWindow () {
    Menu.setApplicationMenu(null);
  mainWindow = new BrowserWindow({
    icon:Path.join(__dirname,'favicon.png'),
    webPreferences: {
      webSecurity: false
    }
  });


  mainWindow.loadURL('http://localhost:8081/')
  mainWindow.webContents.openDevTools()

mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}
app.allowRendererProcessReuse = true;
app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})
