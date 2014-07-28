Multiplo IDE -- MULTIBLOCK  or MULTIDE
======================

A VT100 Serial Terminal as a Chrome Web App (with both syntax highlighted and graphical editors) - designed for writing code on microcontrollers that use the [Espruino JavaScript interpreter](http://www.espruino.com).

[![ScreenShot](https://addheresomeIMG.png)](http://somevideo.link)

This is a Chrome Web App that uses [chome.serial](https://developer.chrome.com/apps/serial) to access your PC's serial port. You can download it from the Chrome Web Store: https://chrome.google.com/webstore/detail/espruino-serial-terminal/bleoifhkdalbjfbobjackfdifdneehpo

It implements basic VT100 terminal features (up/down/left/right/etc) - enough for you to write code using the Espruino. You can also use the right-hand pane to write JavaScript code on the PC, and can then click the 'transfer' icon to send that code directly down the Serial Port.

Installing From Chrome Web Store
----------------------------

* Install the [Chrome Web Browser](https://www.google.com/intl/en/chrome/browser/)
* [Go Here](https://chrome.google.com/webstore/detail/details) to find the app in the Chrome Web Store
* Click 'Install'
* Click 'Launch App'

Installing from GitHub (Latest Version)
---------------------------------------

* Install the [Chrome Web Browser](https://www.google.com/intl/en/chrome/browser/)
* Download the files in MULTIDE to a directory on your PC (either as a [ZIP File](https://github.com/multiplo//////ive/master.zip), or using git)
* Click the menu icon in the top right
* Click 'Settings'
* Click 'Extensions' on the left
* Click 'Load Unpackaged Extension'
* Navigate to the EspruinoWebIDE Directory and click Ok
* Job Done. It'll now appear as an app with the 'Unpacked' banner so you can tell it apart from the normal Web IDE. You can start it easily by clicking the 'Launch' link on the extensions page, or whenever you open a new tab.

Permissions
----------

This web app requires the following permissions:
* *Serial port access* : So that it can access the Espruino board via USB/Serial
* *Webcam access* : So that when you click the little person icon in the top-right of the terminal window, you can overlay the terminal on a live video feed
* *Filesystem/storage access* : For loading/saving your JvaScript files to your local disk

