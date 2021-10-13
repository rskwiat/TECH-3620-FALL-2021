/**
 * Container Component
 * Sets a space on the left / right side of the screen.
 * Visually so the text / images etc do not bump against the phone.
 * https://codeburst.io/a-complete-guide-to-props-children-in-react-c315fab74e7c
 * https://reactjs.org/docs/jsx-in-depth.html#children-in-jsx
 */

import React from "react";
import { View, StyleSheet } from "react-native";

const Container = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18
  }
});

export default Container;
