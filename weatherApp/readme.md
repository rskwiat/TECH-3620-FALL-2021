# Weather App

On your local device in either terminal or PowerShell run:

`expo init weatherApp`

Select `Managed Workflow`, after the installation is complete go into the directory by typing. Open this folder in `VSCode`.

`cd weatherApp`

## Installation of `Expo Location`

In the `weatherApp` folder enter the following in the command line.

```
expo install expo-location
```

> If you see an error with `react-native-screens` or `react-native-safe-area-context` not being found install these packages by running the following command.

```
expo install react-native-screens react-native-safe-area-context
```

## Installation of `React Native Elemements`

React Native Elements is our UI Tool kit to make styling a breeze.

```
npm install --save react-native-elements
```

## Installation of the `React Navigation` Packages

This will install the Navigation library.

```
npm install --save @react-navigation/native @react-navigation/native-stack 
```

> Potential Errors

If you run into this error only experienced on a Mac. It is an issue with the `watchman` package.

```
Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:178:28)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! @ start: expo start
npm ERR! Exit status 1
npm ERR! 
npm ERR! Failed at the @ start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/<USERNAME>/.npm/_logs/2021-09-29T01_15_11_689Z-debug.log
```

To fix the issue we need to install [Homebrew](https://brew.sh/), in the command line run the following steps.

This will install `Homebrew`
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Next step:

```bash
brew install update && brew install watchman
```

---

## Resources
- [React Navigation](https://reactnavigation.org/)
- [React Elements](https://reactnativeelements.com/docs)
