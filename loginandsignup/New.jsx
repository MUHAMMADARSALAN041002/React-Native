import { StyleSheet} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";
import Login from "./Login";
import Signup from "./Signup";

const New = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            options={{
              headerTitle: "Login",
              headerTitleStyle: { fontSize: 25 },
            }}
            component={Login}
          />
          <Stack.Screen
            name="Signup"
            options={{
              headerTitle: "Signup",
              headerTitleStyle: { fontSize: 25 },
            }}
            component={Signup}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default New;

const styles = StyleSheet.create({});
