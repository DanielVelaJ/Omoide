import React from 'react';
import { View, Text, Image } from 'react-native';
import { commonStyles } from '../theme/theme';

const Header = ({ imageUrl, message }) => {
  return (
    <View style={commonStyles.headerContainer}>
      <Image source={{ uri: imageUrl }} style={commonStyles.headerImage} />
      <Text style={commonStyles.headerText}>{message}</Text>
    </View>
  );
};

export default Header;
