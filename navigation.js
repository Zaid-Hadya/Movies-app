import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {View, Text} from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';

export default function Navigation(){
    return (
<NavigationContainer>
<Stack.Navigator screenOptions={{ 
        headerStyle: {
          backgroundColor: '#000000', // Black color
        },
        headerTintColor: '#ffffff', // Text color
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Movies" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}