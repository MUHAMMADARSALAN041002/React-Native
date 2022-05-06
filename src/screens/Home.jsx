import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Home = ({route, navigation}) => {
    const username = route.params.username;
    console.log("username is  :  ", username)
  return (
    <View style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
      <Text style={{fontWeight:"bold", fontSize:24}}>welcome {username} 😄❤️😃 </Text>
      <Button title='go back' onPress={() => navigation.goBack()} />
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({})