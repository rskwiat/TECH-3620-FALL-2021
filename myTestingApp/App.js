import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Header, Button } from "./components";

export default function App() {
  const [goodbye, setGoodbye] = useState(false);
  const [enter, setEnter] = useState(false);
  const [header, setHeader] = useState(true);

  const backgroundColor = enter ? "#000" : "#fff";
  
  const enterButton = () => {
    setEnter(true);
    setHeader(false);

    if (goodbye) {
      setEnter(false);
      setGoodbye(false);
      setHeader(true)
    }
  }

  const leaveButton = () => {
    setEnter(false);
    setHeader(false);
    setGoodbye(true);
  }

  return (
    <>
      {header && <Header text="Welcome" />}
      <View 
        style={{ 
        ...styles.container, 
        backgroundColor
        }}  
      >
        {enter && (
          <>
          <Text style={{ 
            ...styles.textHeader, 
            color: "#FFF"
          }}>Matrix</Text>
          <Image 
            style={styles.imageStyle}
            source={require('./assets/giphy.gif')}
          />
          </>
        )}
        {!goodbye && (
          <>
          <Text style={styles.textHeader}>Open up App.js to start working on your app!</Text>
          <Text style={styles.textStyle}>This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit-hole goes.</Text>
          </>
        )}
        {goodbye && (
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={styles.goodbyeText}>Goodbye</Text>
          </View>
        )}
        <View style={styles.buttonContainer}>
            <Button text="Enter" type="enter" onPress={enterButton} />
            <Button text="Leave" onPress={leaveButton} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    position: 'relative',
    flex: 1,
    height: "100%",
  },
  imageStyle: {
    width: "100%",
    height: 350,
  },
  textHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 40,
    marginTop: 100,
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 24
  },
  goodbyeText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  buttonContainer: {
    marginTop: "auto",
    marginBottom: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
  }
});
