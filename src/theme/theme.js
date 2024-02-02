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
    },

    safeArea: { flex: 1, backgroundColor: colors.background }, // Set the background color for the safe area
    //Header styles
    headerContainer: {
      flexDirection: 'row', // Use row direction for left-to-right layout
      alignItems: 'center', // Vertically align items in the center
      justifyContent: 'flex-start', // Horizontally align items to the left
      color: colors.background,
      paddingLeft: 30, // Add 30 units of padding to the left
      paddingRight: 30, // Add 30 units of padding to the right
      paddingTop: 32
      // Add any other styles you want for your header container
    },
    profilePicture: { width: 48, height: 48, borderRadius: 24, marginRight: 20},

    headerText: {
      fontFamily: fonts.semiBold,
      fontSize: 24,
      lineHeight: 32,
      color: colors.textDark,
      marginBottom: 10,
    },


  });