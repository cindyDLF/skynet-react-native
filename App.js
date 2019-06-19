/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component, useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from "react-native";
import Form from "./components/Form";
import Talk from "./components/Talk";
import bot from "./assets/img/walle.jpg";

/// -> hooks
import useComponent from "./hooks/renderComponent";
import { UserProvider } from "./hooks/UserContext";

const width = Dimensions.get("window").width;


const App = () => {
  const isUser = useComponent();
  const mode = useComponent();
  const [username, setUsername] = useState("");
  //const [gender, setGender] = useState("female");

  displayHeader = () => {
    if(isUser.value) {
      return (
        <View>
        </View>
        )
        } else {
          return (
            <View style={styles.header}>
            <Image source={bot} style={styles.bot} />
            </View>
            )

          }
        }
        return (
          <UserProvider value={{ isUser, username, setUsername, mode }}>
          <View style={!mode.value ? styles.dark : styles.light}>
          <TouchableOpacity onPress={mode.onPress} style={styles.buttonMode}><Text>{!mode.value ? `Dark mode` : `Light mode`}</Text></TouchableOpacity>
          {displayHeader()}
          {isUser.value ? <View style={{flex:1, width: width}}><Talk /></View> : <Form />}
          </View>
          </UserProvider>

          );
        };

        export default App;

        const styles = StyleSheet.create({
          light: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F5FCFF",
            paddingTop: 20
            },
            dark: {
              flex: 1,
              width: width,
              alignItems: "center",
              backgroundColor: "#282c34",
                  paddingTop: 20
              },
              bot: {
                width: 150,
                height: 150,
                borderRadius: 70,
                marginBottom: 10
                },
                header: {
                  marginTop: 40,
                  padding: 30
                }
                });
