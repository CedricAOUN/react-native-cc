import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import your screens
import { Button } from 'react-native';
import Home from './components/Home';
import Settings from './components/Settings';
import { RootStackParamList } from './router';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#44a" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen 
            name="Settings" 
            component={Settings} 
            options={({ route }) => ({ headerRight: () => 
              <Button onPress={() => {}} title="Save Changes" disabled={route.params.username === 'John Doe'} /> 
            })} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
