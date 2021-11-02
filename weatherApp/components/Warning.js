import React from "react";
import { View, StyleSheet } from "react-native";
import { color } from "../constants";

const Warning = ({ text }) => (
  <View style={styles.warning}>
    <Text style={styles.warningText}>
      {text}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  warning: {
    backgroundColor: color.warningBackground,
    borderColor: color.warningBorder,
    borderWidth: 1,
    padding: 15,
    marginVertical: 20,
  },
  warningText: {
    fontSize: 15,
    lineHeight: 20,
    color: color.warningText,
  }
});

export default Warning;
