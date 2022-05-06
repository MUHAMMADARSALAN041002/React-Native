import React from "react";
import {
  Text,
  StyleSheet,
} from "react-native";

function Custom() {

  return (

      <>
        <Text style={styles.text}>Hello World it's custom components</Text>
        
      </>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
 
});
export default Custom;