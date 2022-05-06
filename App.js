import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  FlatList,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Linking
} from "react-native";
import Fetch from "./src/screens/Fetch";
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
// import Child from "./src/screens/child";
// import Custom from "./src/screens/Customs";
import Random from "./src/screens/Random";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from "./project/Routes"
import New from "./loginandsignup/New";

function App() {
  // const name = "MUHAMMAD ARSALAN"

  const student = [
    {
      key: "1",
      name: "arsalan",
    },
    {
      key: "2",
      name: "test",
    },
    {
      key: "3",
      name: "check",
    },
    {
      key: "4",
      name: "key",
    },
    {
      key: "5",
      name: "prop",
    },
    {
      key: "6",
      name: "state",
    },
  ];
  const Stack = createNativeStackNavigator();
  return (
    <>
      {/* <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.text}>Hello World</Text>
          <Custom />
          <Text style={styles.text1}>welcome</Text>
        <Text style={styles.text2}>love react native</Text>
        <Text style={styles.text2} >Hi my name is {name}</Text>
        </View>
      </SafeAreaView> */}

        {/* <FlatList
          keyExtractor={(index) => {
            return index.key
          }}
          horizontal
          // numColumns={3}
          showsHorizontalScrollIndicator={false}
          // inverted
          data={student}
          renderItem={(data) => {
            console.log(data);
            return <Text style={styles.add}>{data.item.name}</Text>;
          }}
        /> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Button
          title="hello world"
          onPress={() => {
            console.log("ok bro");
            Alert.alert("ok bro");
          }}
          disabled
        />
        
        <TouchableOpacity disabled onPress={() => {
            console.log("ok bro");
            Alert.alert("ok bro");
        }}>
        <Image source={require("./assets/test.jpg")} style={styles.imagestyle} />
        
          <Text>hello world</Text>
        </TouchableOpacity> */}
        {/* <Child text="arsalan"/>
        <Child text="hello"/>
        <Child text="world"/>
        <Child text="first"/>
        <Child text="second"/>
        <Child text="third"/> */}
        {/* <Image style={styles.imagestyle} source={{uri:"https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg"}} /> */}

        
        {/* <TouchableOpacity  onPress={() => {
            console.log("ok bro");
            Alert.alert("ok bro");
            Linking.openURL("https://www.facebook.com/")
        }}>
        <Image source={require("./assets/test.jpg")} style={styles.imagestyle} />

        <Text style={styles.text}>hello world</Text>
        </TouchableOpacity> */}
          {/* <Text style={[styles.text, styles.textone, styles.texttwo]}>hello world</Text> */}
        {/* <Image source={require("./assets/test.jpg")} style={styles.imagestyle} /> */}
        {/* <Random /> */}
        {/* <Fetch /> */}
        {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer> */}

        {/* <Login /> */}

        {/* <Routes /> */}

        <New />

        
    </>
  );
}

const styles = StyleSheet.create({
  text: {

    
    textShadowOffset: {width:0, height:0},
    textShadowRadius: 50,
    textShadowColor:"black"
  },
  textone : {
    fontSize: 40,
  },
  texttwo: {
    color: "red",
    // padding:"1000px",
    // paddingHorizontal:"50px",
    // paddingVertical:"50px",
    // borderWidth:"2px",
  },
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingBottom: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
  text1: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 40,
  },
  text2: {
    fontSize: 30,
  },
  add: {
    margin: "100px",
  },
  imagestyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
});
export default App;
