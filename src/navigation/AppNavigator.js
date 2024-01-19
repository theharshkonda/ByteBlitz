import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerNavigator from './DrawerNavigator';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash]"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Tabs" component={BottomTabNavigator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen({ navigation }) {
  useEffect(() => {
    // Simulate a delay for the splash screen (e.g., 2 seconds)
    const splashTimeout = setTimeout(() => {
      // Navigate to the Login screen after the delay
      navigation.navigate(ROUTES.HOME);
    }, 2000);

    // Clean up the timeout on unmount
    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <ImageBackground style={{ flex: 1, alignContent:'center' }} source={require('../assets/images/OIG.jpg')}
    
    /> 
    
  );
}

export default AppNavigator;


