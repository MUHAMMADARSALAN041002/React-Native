import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Course");
        }}
      >
        <Image style={styles.iconImage} source={{uri:'https://img.icons8.com/stickers/90/00000/training.png',}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Userdata");
        }}
      >
         <Image style={styles.iconImage} source={{uri:'https://img.icons8.com/stickers/100/00000/conference.png',}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("About");
        }}
      >
         <Image style={styles.iconImage} source={{uri:'https://img.icons8.com/stickers/100/00000/about.png',}} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Contact");
        }}
      >
        <Image style={styles.iconImage} source={{uri:'https://img.icons8.com/stickers/100/00000/phone-office.png',}} />
      </TouchableOpacity>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  btn: {
    fontWeight: "bold",
    fontSize: 15,
  },
  iconImage : {
    width:50,
    height:40
  }
});
