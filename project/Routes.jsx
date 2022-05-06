import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import About from "./About";
import Course from "./Course";
import Contact from "./Contact";
import Userdata from "./Userdata";

const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        {/* <Stack.Screen name="home" component={Home} /> */}
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} headingname={"WELCOME TO"} />}
        </Stack.Screen>
        <Stack.Screen
          name="About"
          options={{
            headerTitle: "About Us",
            headerTitleStyle: { fontSize: 25 },
          }}
          component={About}
        />
        <Stack.Screen
          name="Course"
          options={{
            headerTitle: "Courses",
            headerTitleStyle: { fontSize: 25 },
          }}
          component={Course}
        />
        <Stack.Screen
          name="Contact"
          options={{
            headerTitle: "Contact Us",
            headerTitleStyle: { fontSize: 25 },
          }}
          component={Contact}
        />
        <Stack.Screen
          name="Userdata"
          options={{
            headerTitle: "Students",
            headerTitleStyle: { fontSize: 25 },
          }}
          component={Userdata}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
