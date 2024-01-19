import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screens/LoginScreen';
import SignupScreen from './src/Screens/SignupScreen';
import AppNavigator from './src/navigation/AppNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppNavigator/>
  );
};

export default App;