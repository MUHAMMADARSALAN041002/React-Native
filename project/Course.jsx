import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import Courses from "./src/api/Course";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const Course = () => {
  const courseCard = ({ item }) => {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor:"white",
          margin: 20,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <Image style={{ width: 250, height: 150 }} source={item.image} />
        </View>
        <Text style={{ fontSize: 25, marginVertical: 10 }}>{item.title}</Text>
        <Text
          style={{
            textAlign: "justify",
            marginVertical: 20,
            marginHorizontal: 30,
          }}
        >
          {item.description}
        </Text>

        <View>
          <TouchableOpacity style={{ margin: 20 }}>
            <Text
              style={{
                backgroundColor: "blue",
                color: "white",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius:10
              }}
            >
              Course details
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        keyExtractor={(item) => {
          return item.id;
        }}
        data={Courses}
        renderItem={courseCard}
      />
    </View>
  );
};

export default Course;

const styles = StyleSheet.create({});
