import {StyleSheet} from 'react-native';

export const colors = {
    primary: "#08AAEA",
    secondary: "#0560B5",
    highlight: "#07A98A",
    pale: "#839AAE",
    background: "#FFFFFF",
    textDark: "#000000",
    textLight: "#FFFFFF",
    lightBlue: "#CBEDFB"
};

export const fonts = {
    regular: 'Poppins-Regular',
    semiBold: 'Poppins-SemiBold',
};

export const commonStyles = StyleSheet.create({
  sectionTitle: {
    fontFamily: fonts.semiBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.textDark,
    marginBottom: 10,
  },
    regularText: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 24,
      color: colors.textDark,
    },
    safeArea: { flex: 1, backgroundColor: colors.background },
    
      // Header Styles
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: colors.background,
      paddingHorizontal: 20,
      paddingTop: 32,
      paddingBottom: 40,
    },
    profilePicture: { 
      width: 48, 
      height: 48, 
      borderRadius: 24, 
      marginRight: 20,
    },
    headerText: {
      fontFamily: fonts.semiBold,
      fontSize: 24,
      lineHeight: 32,
      color: colors.textDark,
    },

    // Banner Styles
    bannerContainer: {
        backgroundColor: colors.highlight,
        borderRadius: 16,
        padding: 20,
        marginHorizontal: 20,
        height: 150,
        justifyContent: 'space-between',
        marginBottom: 40,
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
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center'
  },
  sectionContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
  },

  // Patient preview styles
  patientPreviewContainer: {
    backgroundColor: colors.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  patientPreviewName: {
    fontFamily: fonts.semiBold,
      fontSize: 16,
      lineHeight: 24,
      color: colors.textLight,
      marginBottom: 10,
      flexDirection: 'row',
      alignContent: 'center',
  },
  patientPreviewIconsButtonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: "100%",

  },
  patientPreviewIconsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height:64,
  },

  // Input Field Styles
  inputFieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:1,
},
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: colors.textLight,
  },
  input: {
    marginLeft: 0,
    color: colors.textDark,
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.textDark,
    paddingTop:5,
    textAlignVertical: 'top',
  },

  // Patient Form Styles
  patientFormContainer: {
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 16,
    backgroundColor: colors.primary,
  },


});
