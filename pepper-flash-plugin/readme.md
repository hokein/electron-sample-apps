# Pepper-Flash-Plugin Sample

A sample shows Pepper Flash Plugin usage in Electron. More details can be found
at https://github.com/electron/electron/blob/master/docs/tutorial/using-pepper-flash-plugin.md.

## Run steps

1. Copy the pepper flash plugin under the current app directory.

2. Make ppapi-flash-version in `main.js` align with the copied plugin's.

3. Run the sample `electron path/to/electron-sample-apps/pepper-flash-plugin`.
If it succeeds, you can view `You have version X.X.X.X installed` in the sample page.

## Ways to find pepper flash plugin

**Note:** Please make sure the version of Pepper Flash Plugin is the same to the one being used
in the Electron's Chromium version.

1. Copy from Chrome Browser: you can find the plugin (`Adobe Flash Player`) location
by navigating `chrome://plugins` in Chrome Browser.

2. Manually install Adobe Flash Player from https://get.adobe.com/flashplayer/otherversions/.
Then you can find plugin in the installed directory, ie. On Windows, the directory
is under `C:\Windows\SysWOW64\Macromed\Flash`(32-bits) and `C:\Windows\System32\Macromed\Flash`(64-bits).

## Troublesome

### Failed to load Pepper module from /path/to/pepper-flash-plugin (error: 193)

This means you mixing up the architectures. You need to make the architecture
of flash plugin consitent with Electron you run, e.g., load 32-bit flash plugin
in 32-bit Electron.

## Screenshot

![screenshot](/pepper-flash-plugin/screenshot/screenshot.png)
