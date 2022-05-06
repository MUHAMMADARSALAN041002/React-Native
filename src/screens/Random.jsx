import { StyleSheet, View, Button, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";

const Random = () => {
  const [color, setcolor] = useState([]);

  const randomnumbergenerator = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={{flex:1}}>
      <Button
        title="generate random color"
        onPress={() => {
          const unique = randomnumbergenerator();
          setcolor([...color, unique]);
        }}
      />
      <View style={styles.imagecontainer}>
        <FlatList
          keyExtractor={(key) => {
            return key
          }}
          data={color}
          renderItem={(item) => {
            console.log(item);
            return (
              <>
                <View
                  style={{
                    backgroundColor: item.item,
                    width: "100%",
                    height: 100,
                    borderRadius: 5,
                    marginVertical: 30,
                    fontSize: 25,
                    color: "white",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"
                  }}
                >
                  <Text>{item.item}</Text>
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Random;

const styles = StyleSheet.create({
  imagecontainer: {
    marginHorizontal: 20,
  },
});
