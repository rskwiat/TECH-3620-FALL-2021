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

## Installation of `Expo-Web-Browser` Package

[Webbrowser Docs](https://docs.expo.dev/versions/v42.0.0/sdk/webbrowser/). The `expo-web-browser` provides access to the system's web browser and supports handling redirects. (Added 10/5/2021)

```
expo install expo-web-browser
```

## Installation of the `Redux Toolkit` Packages

[Redux]() Allows us to push data to a global state and be read from anywhere in the app. [Redux Tool Kit or RTK]() is an opinonated framework that takes care of a lot of boilerplate and setup.

```
npm install --save react-redux @reduxjs/toolkit
```

## Installation of Linting Tools and Configs

```
npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-native
```

ESlint is not needed for final production applications.

```
npm install --save prop-types
```

PropTypes is used for typechecking our props in our application.

Eslint Config can be [found here](https://github.com/rskwiat/TECH-3620-FALL-2021/blob/master/configs/.eslintrc)

Just add the `.eslintrc` file next the `App.js` file in the root directory.




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

### Example Response from Expo Location

> 8/19/2021 -- This should be the response from the geo-location api, or something very similar.

```
{
  "accuracy": 10,
  "altitude": 0,
  "altitudeAccuracy": -1,
  "heading": 106.57,
  "latitude": 37.33012571,
  "longitude": -122.02240034,
  "speed": 3.82,
}
```

---

## Resources
- [React Navigation](https://reactnavigation.org/)
- [React Elements](https://reactnativeelements.com/docs)
- [Children Prop](https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c)

## Guidelines
-  [iOS Human Interface](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/)
- [Material Design](https://material.io/design/layout/spacing-methods.html#spacing)