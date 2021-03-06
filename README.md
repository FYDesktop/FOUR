<img src="https://github.com/FYDesktop/FOUR/blob/master/icons/icon.png" width="128">

## Note - Channel 4 Now seem to have changed to a html5 player (finally) so All4 is available in Chrome. This app still works but on playing a video it will ask you to switch to flash.

## Four  
--------
**[Website](https://www.freeyourdesktop.com/)**

A Linux Electron App to access the UK(Only) Channel 4 website. Channel 4 provide players for every other platform Win/Mac/Xbox/Android/IOS

Provides Live streams for:
- Channel 4
- E4
- More 4
- Film 4
- 4 Seven
- 4 Music

And access to catch-up services and channel 4 series boxsets.

<img src="https://github.com/FYDesktop/FOUR/blob/master/screenshot.jpg" width="500" height="500">

## Features:
- Tray Icon with minimise to tray and application menu provided
- Context menu, with cut, copy, paste: 
- The player can be undocked from the main window (Not live streams) to make a seperate mini player. Menu selections from here close the player and open the selection in the main window 


Uses libpepflashplayer.so from chromeOS, taken from https://github.com/TomBZombie/Linux-Watch-Flash-DRM
This enables Linux to run flash DRM content (dirty hack, but the only way at the moment)

This is my first ever attempt at developing a full application (Small shell & python scripts excluded)

## How to install

- [**.Appimage**](https://github.com/FYDesktop/FOUR/releases/download/1.0.0/four-1.0.0-x86_64.AppImage), download the and set as executable, and run.
- [**.DEB**](https://github.com/FYDesktop/FOUR/releases/download/1.0.0/four_1.0.0_amd64.deb), Download and install with software center, GDebi or by opening a terminal and typing:
'sudo dpkg -i four_1.0.0_amd64.deb'
- [**.Zip**](https://github.com/FYDesktop/FOUR/releases/download/1.0.0/four.zip
), Unzip the file and run the four binary

### Keyboard shortcuts

Description            | Keys
-----------------------| -----------------------
Login to My4           | <kbd>Ctrl</kbd> <kbd>L</kbd>
Channel 4 Live         | <kbd>Ctrl</kbd> <kbd>1</kbd>
E4 Live                | <kbd>Ctrl</kbd> <kbd>2</kbd>
More 4 Live            | <kbd>Ctrl</kbd> <kbd>3</kbd>
Film 4 Live            | <kbd>Ctrl</kbd> <kbd>4</kbd>
4 Seven Live           | <kbd>Ctrl</kbd> <kbd>5</kbd>
4 Music Live           | <kbd>Ctrl</kbd> <kbd>6</kbd>
Channel 4 News         | <kbd>Ctrl</kbd> <kbd>7</kbd>
On Demand Service      | <kbd>Ctrl</kbd> <kbd>D</kbd>
Box Sets               | <kbd>Ctrl</kbd> <kbd>B</kbd>
TV Guide               | <kbd>Ctrl</kbd> <kbd>G</kbd>
Fullscreen (Not Player)| <kbd>Ctrl</kbd> <kbd>F</kbd>
Quit Application       | <kbd>Ctrl</kbd> <kbd>Q</kbd>   
       
 
## Known Bugs

- On clicking play a notice sometimes appears about ad blockers, a 10 second countdown begins and then you have to click play again.
- On clicking flash fullscreen the player opens in it's own maximized window with a blank title bar. 4 Music live is the exception as it is served from another provider.
- When the Application start the channel4 homepage has a gap between the window menu and the webpage menu due to a full background advert which doesn't display,dissapears when switching pages.
- Flash player cannot be resized.

## Todo

- Check internet connectivity.
- Media Player Controls / accessability
- Mpris Intergration.
- Player Window resizing, title bar removal and fullscreen key control.
- Package Snap

## Disclaimer

Four is a third party application and is not affiliated with or in control of content it provides. All content is copyright of Channel 4 Television Corporation

## License
GPL V3
