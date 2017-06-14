# Browser

A mini browser that shows the usage of [webview](https://github.com/atom/electron/blob/master/docs/api/webview-tag.md)
in an app.

The app's main window contains a `<webview>` that is sized to fit most of it
(via the `width` and `height` attributes). The location bar is used to
update its `src` attribute.

`<webview>` is the preferred way for you to load web content into your app. It
runs in a separate process and has its own storage, ensuring the security and
reliability of your application.

## APIs

* [webview](https://github.com/atom/electron/blob/master/docs/api/webview-tag.md)


## Screenshot
![screenshot](/webview/browser/screenshot/screenshot.png)
