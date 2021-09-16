import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = ({ type, onPress, text }) => {
  const backgroundColor = type === "enter" ? "#E74C3C" : "#3498DB"; //background color of the button element - string only

  return (
    <TouchableOpacity 
      style={{ 
        ...styles.button, 
        backgroundColor
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center"
  },
  button: {
    width: "45%",
    paddingVertical: 20, //padding of the "button" element - number only
    marginTop: 20, //margin top only of the button element - number only
    borderRadius: 10, //border-radius of the button element - number only
  },
});

export default Button;
