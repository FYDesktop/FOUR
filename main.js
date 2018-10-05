const {app, Tray, Menu, MenuItem, globalShortcut, BrowserWindow, remote, electron} = require('electron');
const path = require('path');
const openAboutWindow = require('about-window').default;
//run included pepperflash plugin
app.commandLine.appendSwitch('ppapi-flash-path', 'libpepflashplayer.so');
app.commandLine.appendSwitch('ppapi-flash-version', '29.0.0.113');

const iconPath = path.join(__dirname, '/icons/icon.png');
var contextmenu
let appIcon = null;
let win = null;
//Tray quits when all windows closed
app.on('window-all-closed', function() {
  app.quit();
});
//main window settings
app.on('ready', function() {
        mainWindow = new BrowserWindow({
          'backgroundColor': '#23272B',
          'icon': path.join(__dirname, 'icons/icon.png'),
          'width': 1050,
          'height': 1080,
          'show': false,
          'overlayFullscreenVideo': true,
          'fullscreenable': true,
          'overlayScrollbars': true,
          'webPreferences': {plugins: true}
        });
//Enable window closed decoration minimises to tray        
        mainWindow.on('close',function(event){
          event.preventDefault()
              mainWindow.hide();
          });

        mainWindow.loadURL(`file://${__dirname}/index.html`)
        mainWindow.webContents.on('did-finish-load', function() {
       });
//Extra JS files for menus       
       require('./modules/tray.js')
       require('./modules/appmenu.js')
       require('./modules/context.js')
    
      // require('./modules/mediakeys.js')
       //uncomment line below for dev tools
       //mainWindow.openDevTools();

       //show page one loaded
       mainWindow.once('ready-to-show', () => {
        mainWindow.show() 
          }
          
        ); 
      });


