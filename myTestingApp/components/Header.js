import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2ECC71",
    shadowColor: "#000",
    shadowOffset: { 
      width: -2, 
      height: 4
    },
    shadowOpacity: 0.2,
    height: 90,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18,
    marginTop: 25,
  }
});

export default Header;