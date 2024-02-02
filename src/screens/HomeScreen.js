import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { colors,commonStyles } from '../theme/theme';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        imageUrl="https://example.com/path-to-your-image.jpg"
        message="Welcome to the App!"
      />
      {/* Other components of your screen */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // You can add additional styling for your screen's safe area
  },
});

export default HomeScreen;
