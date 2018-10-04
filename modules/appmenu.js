const {app, Menu, Tray, MenuItem, BrowserWindow, remote, electron} = require('electron');
const path = require('path');
const openAboutWindow = require('about-window').default;
var menu = Menu.buildFromTemplate([
    {
        label: 'File',
        submenu: [
        {
          label:'Login to My4',
          accelerator: 'CommandOrControl+l',
          click()
          {
            mainWindow.loadURL('https://4id.channel4.com/login?redirectUrl=https%3A%2F%2Fwww.channel4.com%2Fmy4')
          }
        },
        {
          label: 'Toggle Full Screen',
                click: () => { toggleFullscreen();},
                accelerator: 'CmdOrCtrl+f'    
        },
        {
        label:'Quit',
        accelerator: 'CommandOrControl+q',
        click:  function(){
          app.isQuiting = true;
          mainWindow.destroy();
          
          
        }
      },
        ]
        
    },
    {
      label: 'Watch',
      submenu: [
      {
        label:'Watch Live',
        submenu: [
        {
          label: 'Channel 4',
          accelerator: 'CommandOrControl+1',
          click()
          {
            mainWindow.loadURL('https://www.channel4.com/now/C4')
          }
        },
        {
          label: 'E4',
          accelerator: 'CommandOrControl+2',
          click()
          {
            mainWindow.loadURL('https://www.channel4.com/now/E4')
          }
        },
        {
          label: 'More 4',
          accelerator: 'CommandOrControl+3',
          click()
          {
            mainWindow.loadURL('https://www.channel4.com/now/M4')
          }
        },
        {
          label: 'Film 4',
          accelerator: 'CommandOrControl+4',
          click()
          {
            mainWindow.loadURL('https://www.channel4.com/now/F4')
          }
        },   
        {
          label: '4Seven',
          accelerator: 'CommandOrControl+5',
          click()
          {
            mainWindow.loadURL('https://www.channel4.com/now/4S')
          }
        },
        {
          label: '4 Music',
          accelerator: 'CommandOrControl+6',
          click: function() {
            mainWindow.show();
            mainWindow.loadURL('http://www.4music.com/?intcmp=header_categories_4m');
          }
      },
      {
        label: 'Channel 4 News',
        function: 'CommandOrControl+7',
        click: function() {
          mainWindow.show();
          mainWindow.loadURL('https://www.channel4.com/news/catch-up');
        
        }
      }]
  
      },
      {
        label: 'Tv Guide',
        accelerator: 'CommandOrControl+G',
        click: function() {
          mainWindow.show();
          mainWindow.loadURL('https://www.channel4.com/tv-guide?intcmp=header_watch_live_tvguide');
        }
    },
      {
      label:'On Demand',
      accelerator: 'CommandOrControl+D',
      click()
      {
        mainWindow.loadURL('https://www.channel4.com/programmes/catchup')
      }
    },
    {
      label:'Box Sets',
      accelerator: 'CommandOrControl+B',
      click()
      {
        mainWindow.loadURL('https://www.channel4.com/collection/box-sets')
      }
    },
      ]
      
  },
    {
        label: 'Help',
        submenu: [
        {
          label: 'About',
          click() 
          {
            require('./about.js')
          
          }
        }
      ]
        
    }
  ]);
  Menu.setApplicationMenu(menu); 
  
  function toggleFullscreen() {
    if (mainWindow.isFullScreen()) {
        mainWindow.setFullScreen(false);
    } else {
        mainWindow.setFullScreen(true);
    }
}