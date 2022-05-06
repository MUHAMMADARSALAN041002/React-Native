import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import Checkbox from "expo-checkbox";
import { Alert, SafeAreaView, StatusBar } from "react-native";

const Login = ({navigation}) => {
  const [agree, setagree] = useState(false);
  const [name, setname] = useState("");
  console.log(name);
  const [password, setpassword] = useState("");
  console.log(password);

  const submit = () => {
    if (name && password) {
      Alert.alert(`welcome to ${name}`);
      navigation.navigate("home", {username: `${name}`})
    } else {
      Alert.alert(`please! check email and passwod`);
    }
  };
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>
        <Text style={styles.heading}>Login Form</Text>
        <Text>welcome to react native app</Text>
        <Text style={styles.textlabel}>Enter your email</Text>
        <TextInput
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.textinput}
          value={name}
          onChangeText={(data) => setname(data)}
        />
        <Text style={styles.textlabel}>Enter your password</Text>
        <TextInput
          style={styles.textinput}
          autoCorrect={false}
          secureTextEntry={true}
          autoCapitalize="none"
          value={password}
          onChangeText={(data) => setpassword(data)}
        />

        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 12 }}
        >
          <Checkbox
            value={agree}
            onValueChange={() => {
              setagree(!agree);
            }}
          />
          <Text> I have agree terms and conditions</Text>
        </View>
        <Button title="login" onPress={() => submit()} disabled={!agree} />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  maincontainer : {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    margin: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textlabel: {
    marginTop: 20,
  },
  textinput: {
    borderWidth: 1,
    marginVertical: 10,
    height: 30,
  },
});
