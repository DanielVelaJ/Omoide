import React from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import the Icon component
import { commonStyles } from '../theme/theme';

const IconWithText = ({ iconName, text, color }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:'center' }}>
            <MaterialIcons name={iconName} color={color} size={24} style={{ marginRight: 10 }} />
            <Text style={commonStyles.regularText}>{text}</Text>
        </View>
    );
};

export default IconWithText;