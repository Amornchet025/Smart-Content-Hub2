import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import RootStack from './navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#152B49" />
      <RootStack />
    </NavigationContainer>
  );
}
