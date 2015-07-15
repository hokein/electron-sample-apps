# Notification Demo

A sample demonstrates Notification API usage. The Notification API in Electron
only works on OS X and sometimes on Linux. If you look a cross-platform solution
for Electron, [node-notifier](https://github.com/mikaelbr/node-notifier) is a potential alternatives.

Electron's Notification API is implemented with native notification APIs.
On OS X, you can customize your Electron's notification alert style via
`Notifications` panel in `System Preference`.

Related Notification issues on electron are traced in:

* [atom/electron#262](https://github.com/atom/electron/issues/262)
* [atom/electron#1920](https://github.com/atom/electron/issues/1920)
* [atom/electron#1025](https://github.com/atom/electron/issues/1025)
