import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '../theme/theme';

const Header = ({ message }) => {
  return (
    <View style={commonStyles.headerContainer}>
      <Image source={require('../../assets/images/profilePicture.jpg')} style={commonStyles.profilePicture} />
      <Text style={commonStyles.headerText}>{message}</Text>
    </View>
  );
};

export default Header;