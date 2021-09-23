import React from "react";
import { 
  View,
  Text,
  StyleSheet,
} from "react-native";

const Header = ({ text }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#2ecc71",
    height: 90,
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#000",
    fontSize: 18,
    marginTop: 25,
  }
})

export default Header;
