import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

const About = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        marginTop: 0,
        alignItems: "center",
        height: "100%",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 50 }}>
        MUHAMMAD ARSALAN
      </Text>
      <Text style={{ marginVertical: 10 }}>I am a Full Stack Developer 😃</Text>
      <Image
        style={{ width: 120, height: 120, borderRadius: 80 }}
        source={{
          uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        }}
      />
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
          alignItems: "center",
          backgroundColor: "blue",
          padding: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          ABOUT ME
        </Text>
        <Text style={{ color: "white", marginVertical:10 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse
          reiciendis magnam consequatur, non, eveniet, odit pariatur quia
          laboriosam at eum voluptatibus quaerat veniam! Inventore error vero
          reiciendis dolor repellat!
        </Text>
      </View>

      <View style={{ position: "absolute", bottom: 20 }}>
        <View>
          <Text style={{marginVertical:15, fontWeight:"bold", fontSize:17}}>FOLLOW ME ON SOCIAL NETWORK</Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row", justifyContent:"space-evenly"}}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.twitter.com/");
            }}
          >
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://img.icons8.com/stickers/90/00000/twitter.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.facebook.com/");
            }}
          >
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://img.icons8.com/stickers/100/00000/facebook.png",
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.youtube.com/");
            }}
          >
            <Image
              style={styles.iconImage}
              source={{
                uri: "https://img.icons8.com/stickers/100/00000/youtube.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  iconImage: {
    width: 50,
    height: 40,
  },
});
