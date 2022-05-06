import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";

const Userdata = () => {
  const [userData, setUserData] = useState([]);
  const [loading, setloading] = useState(true);

  const getuserdata = async () => {
    const response = await fetch(
      "https://thapatechnical.github.io/userapi/users.json"
    );
    const myData = await response.json();
    setUserData(myData);
    setloading(false);
  };
  useEffect(() => {
    getuserdata();
  }, []);

  const studentCard = ({ item }) => {
    return (
      <View style={{ margin: 15 }}>
        <View style={{ margin: 10 }}>
          <Image
            style={{ width: "100%", height: 150 }}
            source={{ uri: item.image }}
          />
        </View>
        <View style={{ backgroundColor: "black", margin: 0, padding: 0 }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 20 }}>Bio-Data</Text>
            {/* <Text style={{ color: "white" }}>
              {item.id < 10 ? `#0${item.id}` : `${item.id}`}
            </Text> */}
          </View>
          <View style={{ margin: 10 }}>
            <Text style={{ color: "white", fontSize: 10 }}>
              Name : {item.name}
            </Text>
            <Text style={{ color: "white", fontSize: 10 }}>
              Email : {item.email}
            </Text>
            <Text style={{ color: "white", fontSize: 10 }}>
              Mobile : {item.mobile}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ width: "100%", height: "100%" }}>
        <Text style={{ fontSize: 23, textAlign: "center", fontWeight: "bold" }}>
          List Of Passed Students
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          {loading ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={userData}
                renderItem={studentCard}
              />
            </View>
          )}
        </View>

        <Text style={{ fontSize: 25, textAlign: "center", fontWeight: "bold" }}>
          List Of Fail Students
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 300,
          }}
        >
          {loading ? (
            <View
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                inverted
                horizontal
                data={userData}
                renderItem={studentCard}
              />
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};
export default Userdata;

const styles = StyleSheet.create({});
