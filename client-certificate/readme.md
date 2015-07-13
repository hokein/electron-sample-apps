# Client-Certificate Sample

A sample shows `client-certificate` usage in Electron. In this sample, we launch
a https server, and create our own Server/Client Certificates with a local CA.


## How to run

1. Generate all the required PEM formate files by running `./ssl/setup.sh` script.
One the script is done, all the generated files are under `ssl/` folder.

2. Import `rootCA.crt` and `client.p12` to your system.

3. Run `node server.js` to launch a https server `https://localhost:5000`.

4. Run the app in electron, and you will view a `approved` in the webpage.


## More

If you visit `https://localhost:5000` in Chrome, the Chrome browser will prompt up
a window to let users to select the CA certificates, which is a default browser behavior.

Unlike browser, Electron will use the first matched certificate by default.

The `--client-certificate` switch command doesn't work if there are no matched certificates
in OS, the bug is tracked in [atom/electron#1956](https://github.com/atom/electron/issues/1956).
And the switch only supports no-password protected PEM format file. In this sample,
the file is `client.crt`.
