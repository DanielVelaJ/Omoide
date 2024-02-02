import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors,commonStyles } from '../theme/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header
        message="Welcome to the App!"
      />
      {/* Other components of your screen */}
    </SafeAreaView>
  );
};



export default HomeScreen;
