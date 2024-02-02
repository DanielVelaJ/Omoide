import {StyleSheet} from 'react-native';
// theme.js
export const colors = {
    primary: "#08AAEA",
    secondary: "#0560B5",
    highlight: "#07A98A",
    pale: "#839AAE",
    background: "#FFFFFF",
    textDark: "#000000",
    textLight: "#FFFFFF",
  };
  
  export const fonts = {
    regular: 'Poppins-Regular',
    semiBold: 'Poppins-SemiBold',
    // Add other font styles if needed
  };
  
  // You can also export common styles if they are reused across multiple components
  export const commonStyles = StyleSheet.create({
    screenTitle: {
      fontFamily: fonts.semiBold,
      fontSize: 24,
      lineHeight: 32,
      color: colors.textDark,
      marginBottom: 10,
    },
    sectionTitle: {
      fontFamily: fonts.semiBold,
      fontSize: 16,
      lineHeight: 19,
      color: colors.textDark,
      marginBottom: 10,
    },
    regularText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 24,
      marginBottom: 10,
      color: colors.textDark, // Set the text color for regular text
    }
  });