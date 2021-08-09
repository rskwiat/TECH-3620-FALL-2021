# Shared Configurations

This folder will have shared configurations to make the of our in class applications development easier. The following two libaries will be used in the application.

## Prettier

[Prettier](https://prettier.io) is an opinionated code formatter, that formats your code on either save or a `pre-commit` hook.

### Prettier Setup

1. Install the `Prettier` extension in VSCode.

2. Create the `prettier` config. Create a file in the root of the directory with the name of `.prettierrc` then copy and paste the configuration from [here](.prettierrc).

3. To enabled it go to Settings in VSCode and then search for settings and then click on `Format on Save`

## ESlint

[ESLint](https://eslint.org) is a tool that analyzes your code to quickly find problems based on the configuration file.

### ESLint Setup

1. Install the `ESLint` extension in VSCode.

2. In the command line we need to install the `devDependencies`, these plugins + the configuration will give us a good base line on what to develop for.

```
$ npm install --save-dev eslint eslint-plugin-react eslint-plugin-react-native
```

3. Create a `.eslintrc` and a `.eslintignore` config files in the root of the directory. By default ESlint will read all the `js` and `ts` files in project.

4. Copy and paste the configuration from [here](.eslintrc) and the ignore files from [here](.eslintignore).
