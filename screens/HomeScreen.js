import {View, Text} from 'react-native'
import React from 'react'
export default function Navigation(){
    return (
<NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    )
}