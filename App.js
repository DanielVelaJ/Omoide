import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { colors, commonStyles } from './src/theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'; // Importing MaterialIcons

export default function App() {
  let [fontsLoaded] = useFonts({
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={[commonStyles.container, {backgroundColor: colors.background}]}>
      {/* Screen Title style */}
      <Text style={[commonStyles.screenTitle, {color: colors.primary}]}>Screen Title</Text>
      
      {/* Section Title style */}
      <Text style={[commonStyles.sectionTitle, {color: colors.secondary}]}>Section Title</Text>
      
      {/* Icon Example */}
      <MaterialIcons name="home" size={30} color={colors.primary} />

      {/* Third Text style */}
      <Text style={[commonStyles.thirdTextStyle, {color: colors.textDark}]}>Regular Text</Text>
      
      {/* Text showcasing the highlight color */}
      <Text style={[commonStyles.thirdTextStyle, {color: colors.highlight}]}>Highlight Text</Text>
      
      {/* Text showcasing the pale color */}
      <Text style={[commonStyles.thirdTextStyle, {color: colors.pale}]}>Pale Text</Text>
      
      {/* Text showcasing the textLight color */}
      <Text style={[commonStyles.thirdTextStyle, {color: colors.textLight}]}>Light Text</Text>
    </View>
  );
}
