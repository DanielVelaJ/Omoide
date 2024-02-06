import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Ionicons } from '@expo/vector-icons';
import { View, Pressable } from 'react-native'; // Add Pressable here

import HomeScreen from './src/screens/HomeScreen';
import PatientScreen from './src/screens/PatientScreen';
import { PatientsProvider } from './src/contexts/PatientsContext';
import { colors } from './src/theme/theme';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <Pressable
        onPress={() => navigation.navigate('Home')}
        style={({ pressed }) => [
          { padding: 10 },
          { opacity: pressed ? 0.5 : 1 }
        ]}
      >
        <Ionicons name="home" color={colors.primary} size={30} />
      </Pressable>
    </View>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <PatientsProvider>
      <NavigationContainer testID="navigation-container">
        <Tab.Navigator 
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <CustomTabBar {...props} />}
        >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="home" color={colors.primary} size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Patient" 
            component={PatientScreen} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PatientsProvider>
  );
}