import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

// Import your screens
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Platform } from 'react-native';
import GeoLocationSandbox from './components/GeoLocationSandbox';
import Home from './components/Home';
import InputSandbox from './components/InputSandbox';
import ListHome from './components/ListSandbox';
import News from './components/News';
import Settings from './components/Settings';
import { RootStackParamList } from './router';

const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <>
      <StatusBar style="dark" backgroundColor="#44a" />
      <NavigationContainer>
        {Platform.OS === 'ios' && (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
            <Tab.Screen name="News" component={News} />
            <Tab.Screen name="ListHome" component={ListHome} />
            <Tab.Screen name="GeoLocationHome" component={GeoLocationSandbox} />
            <Tab.Screen name="InputSandbox" component={InputSandbox} />
          </Tab.Navigator>
        )}
        {Platform.OS === 'android' && (
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="News" component={News} />
            <Drawer.Screen name="ListHome" component={ListHome} />
            <Drawer.Screen name="GeoLocationHome" component={GeoLocationSandbox} />
            <Drawer.Screen name="InputSandbox" component={InputSandbox} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
