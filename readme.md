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

> Errors

When installing if you recieve this error:

```
errno -13
Error: EACESS: permission denied, access 'user/local/lib/node/modoules'
{
  errno: -13,
  code 'EACCES',
  syscall: 'access'
  ...
}
```

There is a conflict with installing packages globally and your user account. By running the following command this should grant you permissions to install the package globally. 

```bash
sudo npm install --global expo-cli
```

There are [other prefered workarounds](https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules), but for our class needs this should be ok.


## Initilizing an Expo Project

We will cover this more next week

```bash
expo init <MyApplicationName>
```
