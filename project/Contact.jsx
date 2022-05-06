import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { TextInput, Alert } from "react-native";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";

const Contact = ({navigation}) => {
  // const navigation = useNavigation();
  const [agree, setagree] = useState(false);
  const [name, setname] = useState("");

  const submit = () => {
    Alert.alert(`Thank You ${name}`);
    navigation.navigate("Home");
  };
  return (
    <View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 3 }}>
          Thank You For Contact Us
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 3 }}>
          You Can Also Contact Via email
        </Text>
        <Text style={{ fontWeight: "bold", fontSize: 18, marginVertical: 3 }}>
          reactnative@gmail.com
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text>Enter Your Name</Text>
        <TextInput
          placeholder="MUHAMMAD ARSALAN"
          style={{ height: 40, marginVertical: 10, borderWidth: 1, padding: 5 }}
          value={name}
          onChangeText={(data) => setname(data)}
        />
        <Text>Enter Your Email</Text>
        <TextInput
          autoCapitalize="none"
          placeholder="example@gmail.com"
          style={{ height: 40, marginVertical: 10, borderWidth: 1, padding: 5 }}
        />
        <Text>Enter Your Phone Number</Text>
        <TextInput
          placeholder="0341-2299478"
          autoCapitalize="none"
          style={{ height: 40, marginVertical: 10, borderWidth: 1, padding: 5 }}
        />
        <Text>Tell About Your Problem</Text>
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder="Tell About Your Problem"
          style={{ marginVertical: 10, borderWidth: 1 }}
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
        <Button title="Contact Us" onPress={() => submit()} disabled={!agree} />
      </View>
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({});
