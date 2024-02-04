import {StyleSheet} from 'react-native';

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
};

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
      color: colors.textDark,
    },
    safeArea: { flex: 1, backgroundColor: colors.background },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: colors.background,
      paddingLeft: 30,
      paddingRight: 30,
      paddingTop: 32,
      paddingBottom: 40,
    },
    profilePicture: { width: 48, height: 48, borderRadius: 24, marginRight: 20},
    headerText: {
      fontFamily: fonts.semiBold,
      fontSize: 24,
      lineHeight: 32,
      color: colors.textDark,
      marginBottom: 32,
    },

    // Banner Styles
    bannerContainer: {
        backgroundColor: colors.highlight,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 20,
        height: 150,
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    bannerText: {
      fontFamily: fonts.semiBold,
      fontSize: 16,
      lineHeight: 19,
      color: colors.textLight,
      marginBottom: 10,
      alignSelf: 'center'
    },
    bannerButton: {
      backgroundColor: colors.background,
      borderRadius: 16,
      padding: 8,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});