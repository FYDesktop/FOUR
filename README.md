AllFour
--------

A Linux Electron App to access the UK(Only) Channel 4 website. Channel 4 provide players for every other platform Win/Mac/Xbox/Android/IOS

Provides Live streams for:
Channel 4
E4
More 4
Film 4
4 Seven
4 Music

And access to catch-up services and channel 4 series boxsets.
Features:
Tray Icon with minimise to tray and application menu provided
Context menu, with cut, copy, paste: (check inspect element in release)
The player can be undocked from the main window (Not live streams) to make a seperate mini player. Menu selections from here close the player and open the selection in the main window 


Uses libpepflashplayer.so from chromeOS, taken from https://github.com/TomBZombie/Linux-Watch-Flash-DRM
This enables Linux to run flash DRM content (dirty hack, but the only way at the moment)

This is my first ever attempt at developing a full application (Small shell & python scripts excluded)

Keyboard Shortcuts
Ctrl + L        Login to My4
Ctrl + 1        Channel 4
Ctrl + 2        E4
Ctrl + 3        More 4
Ctrl + 4        Film 4
Ctrl + 5        4 Seven
Ctrl + 6        4 Music
Ctrl + 7        Channel 4 News Latest
Ctrl + D        On Demand service
Ctrl + B        Box Sets
Ctrl + G        TV Guide
Ctrl + F        Toggle Fullscreen (Not player) #####################
Ctrl + Q        Quit Application
 

Known Bugs:

-On clicking play a notice sometimes appears about ad blockers, a 10 second countdown begins and then you have to click play again.
-On clicking flash fullscreen the player opens in it's own maximized window with a blank title bar. 4 Music live is the exception as it is served from another provider.
-when the Application start the channel4 homepage has a gap between the window menu and the webpage menu due to a full background advert which doesn't display,dissapears when switching pages.
-Flash player cannot be resized.

Todo
dock menu with loading icon
loading page - done
check internet connectivity. - not needed
context menu. -done
overlay style scrollbars?   -done? can't test
Media Player Controls - (focus on flash tab keypress space then lose focus) accessability
Mpris Intergration-?
Player Window resizing, title bar removal and fullscreen key control - cannot do?