//about window options
const openAboutWindow = require('about-window').default;
const path = require('path');
openAboutWindow({
    icon_path: path.join(__dirname, '4colour.png'),
    product_name: 'FOUR',
    description: 'Unofficial web wrapper for UK Channel 4 on demand and catch up service',
    homepage: 'https://www.freeyourdesktop.com/development/',
    copyright: 'All Content: Copyright of Channel 4 Television Corporation'
  }
  ) 