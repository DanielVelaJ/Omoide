import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import HomeScreen from './src/screens/HomeScreen'; // Import your HomeScreen

const Tab = createBottomTabNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer testID="navigation-container">
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        {/* Add more Tab.Screen components for other screens */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}