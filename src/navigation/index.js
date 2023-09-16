import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import Welcome from '../screens/Welcome'
const Stack = createNativeStackNavigator()

function HomeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Welcome' component={Welcome} />
        

      </Stack.Navigator>

    </NavigationContainer>
  )
}




export default HomeNavigation