const {app, Tray, Menu, MenuItem, globalShortcut, BrowserWindow, remote, electron} = require('electron');
const path = require('path');
const openAboutWindow = require('about-window').default;

app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, 'libpepflashplayer.so'));
app.commandLine.appendSwitch('ppapi-flash-version', '29.0.0.113');

const iconPath = path.join(__dirname, '/icons/icon.png');
let appIcon = null;
let win = null;

app.on('ready', function() {
        mainWindow = new BrowserWindow({
          'backgroundColor': '#23272B',
          'icon': path.join(__dirname, 'icons/icon.png'),
          'width': 990,
          'height': 1080,
          'show': false,
          'overlayFullscreenVideo': true,
          'fullscreenable': true,
          'overlayScrollbars': true,
          'webPreferences': {plugins: true}
        });
        mainWindow.on('close',function(event){
          event.preventDefault()
              mainWindow.hide();
          });
        mainWindow.loadURL(`file://${__dirname}/index.html`)
        mainWindow.webContents.on('did-finish-load', function() {
       });
       require('./modules/tray.js')
       require('./modules/appmenu.js')
       require('./modules/context.js')
      // require('./modules/mediakeys.js')

       //mainWindow.openDevTools();
       mainWindow.once('ready-to-show', () => {
        mainWindow.show() 
      })
});


