import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import Menu from "./src/components/Menu";

const Home = (props) => {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require("../assets/homeimage.jpg")}
        />
        <Text style={styles.heading}>{props.headingname}</Text>
        <Text style={[styles.heading, {color:"darkblue"}]}>ONLINE EDUCATION APP</Text>
        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          cupiditate accusantium ratione odit facere distinctio magnam
          recusandae maxime hic voluptatibus. Laborum ducimus cum nesciunt,
          optio id laudantium voluptatum aspernatur, voluptate tempore amet
          natus? Asperiores veritatis facere alias vitae explicabo velit
          perferendis voluptates autem rerum magnam corporis, inventore enim
          facilis eum.
        </Text>
      </View>

      <View style={styles.menu}>
        <Menu />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  maincontainer: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width:"100%",
    height:"100%"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop:70
  },
  image: {
    width: "90%",
    height: 200,
    borderRadius: 20,
    marginBottom: 15,
  },
  heading: {
    fontSize: 28,
    color:"red"
  },
  paragraph: {
    textAlign:"justify",
    marginHorizontal: 23,
    color:"black",
    marginTop: 15
  },
  menu : {
    marginTop:100,
    borderTopWidth:1,
    borderColor:"grey",
    padding:10
  }
});
