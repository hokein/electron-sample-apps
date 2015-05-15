# Spellchecking Demo

This demo relies on the [spellchecker](https://github.com/atom/node-spellchecker) node module which maps through to the native spellchecker APIs on Mac, Windows, and Linux. Because this module runs native code, it needs to be compiled. It's important that you compile it for the version of Atom Shell you are using using the [instructions here](https://github.com/atom/electron/blob/master/docs/tutorial/using-native-node-modules.md).

```
export ATOM_NODE_VERSION=0.26.0
cd spellchecking
apm install .
```

If you do this wrong, you'll see one of these two messages in the console:

```
[37332:0514/214811:INFO:CONSOLE(134)] "Uncaught Error: Module version mismatch. Expected 43, got 41.", source: ATOM_SHELL_ASAR.js (134)

---> You compiled the module against the wrong version of Electron.
```

```
[37617:0514/215117:INFO:CONSOLE(134)] "Uncaught Error: Module did not self-register.", source: ATOM_SHELL_ASAR.js (134)

---> You compiled the module using `npm` not `apm`, or it otherwise couldn't be loaded into Electron.
```