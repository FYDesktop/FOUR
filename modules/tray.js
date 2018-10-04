const {app, Tray, Menu, menuItem} = require('electron');
const path = require('path');
const iconPath = path.join(__dirname, 'icon.png');

appIcon = new Tray(iconPath);
  var contextMenu = Menu.buildFromTemplate([
    { label: 'Show App', click:  function(){
      mainWindow.show();
  } },
    {
        label: 'Sign In To My4',
        click: function() {
          mainWindow.show();
          mainWindow.loadURL('https://4id.channel4.com/login?redirectUrl=https%3A%2F%2Fwww.channel4.com%2Fmy4');
        }
    },
    {
      label: 'Tv Guide',
      click: function() {
        mainWindow.show();
        mainWindow.loadURL('https://www.channel4.com/tv-guide?intcmp=header_watch_live_tvguide');
      }
  },  
    {
      label: 'Watch Live',
      submenu: [
       
      {
        label: 'Channel 4',
        click: function() {
          mainWindow.show();
          mainWindow.loadURL('https://www.channel4.com/now/C4');
        }
    }, 
      {
        label: 'E4',
        click: function() {
          mainWindow.show();
          mainWindow.loadURL('https://www.channel4.com/now/E4');
        }
    }, 
    {
      label: 'More4',
      click: function() {
        mainWindow.show();
        mainWindow.loadURL('https://www.channel4.com/now/M4');
      }
  }, 
  {
    label: 'Film 4',
    click: function() {
      mainWindow.show();
      mainWindow.loadURL('https://www.channel4.com/now/F4');
    }
}, 
{
  label: '4 Seven',
  click: function() {
    mainWindow.show();
    mainWindow.loadURL('https://www.channel4.com/now/4S');
  }
},
  {
    label: '4 Music',
    click: function() {
      mainWindow.show();
      mainWindow.loadURL('http://www.4music.com/?intcmp=header_categories_4m');
    }
},
{
  label: 'Channel 4 News',
  click: function() {
    mainWindow.show();
    mainWindow.loadURL('https://www.channel4.com/news/catch-up');
  }
},
      ]
    },
    {
      label: 'On Demand',
      accelerator: 'CommandOrControl+6',
      click: function() {
        mainWindow.show();
        mainWindow.loadURL('https://www.channel4.com/programmes/catchup');
      }
    },  
    {
      label: 'Box Sets',
      accelerator: 'CommandOrControl+7',
      click: function() {
        mainWindow.show();
        mainWindow.loadURL('https://www.channel4.com/collection/box-sets');
      }
    },
    { label: 'Quit',
    click:  function(){
      app.isQuiting = true;
      
     {
      mainWindow.destroy()
    }
      }
    }
  ]);
  appIcon.setToolTip('All4 - Live,On Demand & Box Sets');
  appIcon.setContextMenu(contextMenu);
 