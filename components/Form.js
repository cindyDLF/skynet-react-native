import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import CheckBox from "react-native-check-box";

/// -> hooks
import UserContext from "../hooks/UserContext";

const width = Dimensions.get("window").width;

const Form = () => {
  const [checkedMale, setCheckedMale] = useState(false);
  const [checkedFemale, setCheckedFemale] = useState(false);

  const { isUser, username, setUsername, mode } = useContext(UserContext);

  return (
    <KeyboardAvoidingView
      style={styles.formContainer}
      behavior="padding"
      enabled
    >
      <TextInput
        style={!mode.value ? styles.textinputdark : styles.textinputlight}
        placeholder="Username"
        placeholderTextColor="#9ca8ad"
        onChangeText={text => setUsername(text)}
      />
      <CheckBox
        style={{ padding: 10 }}
        checkBoxColor={!mode.value ? "#F5FCFF" : "#282c34"}
        checkedCheckBoxColor={!mode.value ? "#F5FCFF" : "#282c34"}
        rightTextStyle={
          !mode.value ? styles.textCheckboxdark : styles.textCheckboxlight
        }
        onClick={() => {
          setCheckedMale(!checkedMale);
        }}
        isChecked={checkedMale}
        rightText={"Male"}
      />
      <CheckBox
        style={{ padding: 10 }}
        checkBoxColor={!mode.value ? "#F5FCFF" : "#282c34"}
        checkedCheckBoxColor={!mode.value ? "#F5FCFF" : "#282c34"}
        rightTextStyle={
          !mode.value ? styles.textCheckboxdark : styles.textCheckboxlight
        }
        onClick={() => {
          setCheckedFemale(!checkedFemale);
        }}
        isChecked={checkedFemale}
        rightText={"Female"}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={
          username !== ""
            ? isUser.onPress
            : () => Alert.alert("Please enter a username")
        }
      >
        <Text style={styles.textButton}>Enter</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

export default Form;

const styles = StyleSheet.create({
  textinputdark: {
    width: width - 60,
    borderWidth: 1,
    borderColor: "#F5FCFF",
    borderRadius: 20,
    height: 40,
    padding: 10,
    color: "#F5FCFF",
    fontSize: 18,
    marginBottom: 10
  },
  textinputlight: {
    width: width - 60,
    borderWidth: 1,
    borderColor: "#282c34",
    borderRadius: 20,
    height: 40,
    padding: 10,
    color: "#282c34",
    fontSize: 18
  },
  formContainer: {
    marginTop: 10
  },
  textCheckboxdark: {
    color: "#F5FCFF",
    fontSize: 18
  },
  textCheckboxlight: {
    color: "#282c34",
    fontSize: 18
  },
  button: {
    width: width - 60,
    borderWidth: 1,
    borderColor: "#ffd426",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#ffd426",
    marginTop: 10
  },
  textButton: {
    color: "#282c34",
    fontSize: 18
  }
});
