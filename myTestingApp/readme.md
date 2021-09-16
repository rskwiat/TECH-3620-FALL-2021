# Setting up the Testing and Layout App

On your local device in either Terminal or PowerShell run:

`expo init myTestingApp`

Select `Managed Workflow`, after the installation is complete go into the directory by typing:

```bash
cd myTestingApp
```

No other packages will be needed for the app!

```bash
npm start
```

## Documentation and definitions

### [Props](https://reactjs.org/docs/components-and-props.html)

Props are read only properties in a react function. These generally accept data and return it.

### [Touchable Opacity](https://reactnative.dev/docs/touchableopacity)

A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.

### [Text](https://reactnative.dev/docs/text)

A React component for displaying text. Text supports nesting, styling, and touch handling.

### [View](https://reactnative.dev/docs/view)

The most fundamental component for building a UI, View is a container that supports layout with flexbox, style, some touch handling, and accessibility controls. View maps directly to the native view equivalent on whatever platform React Native is running on, whether that is a UIView, `<div>`, android.view, etc.

### [Stylesheet](https://reactnative.dev/docs/stylesheet)

A StyleSheet is an abstraction similar to CSS StyleSheets

