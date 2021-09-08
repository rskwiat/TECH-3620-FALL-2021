# Tech 3620 Code Repository

All Code for in-class applications and recordings

## Tools Need

- [VSCode](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/)
- [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US&gl=US)
- [Expo for iOS](https://apps.apple.com/us/app/expo-go/id982107779)
- PowerShell / Terminal (Built into Windows / Mac OS)

## Documentation Sites
- [Expo Docs](https://docs.expo.dev/index.html)
- [React Native Docs](https://reactnative.dev/docs/getting-started)

## Setup Instructions

For both Mac and PC users go to [NodeJS](https://nodejs.org/en/) and download the latest LTS version for your OS.

When prompted to install for current users click accept.

### Windows Users

> If you are windows click on `change` for the installation options and click on the checkbox prompt for installing `chocolatey` this will open up PowerShell and install Python and NodeJS properly.

### Testing Installation

In your terminal application enter the following command:

```bash
node -v
```

This should output your node version (14.17.0)

## Installing Expo-CLI

In the terminal enter the following command:

```bash
npm install --global expo-cli
```

This will install `expo-cli` global so you can initialize a project and get everything working.

## Initilizing an Expo Project

We will cover this more next week

```bash
expo init <MyApplicationName>
```
