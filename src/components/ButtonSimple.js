import React from 'react';
import { Pressable, Text } from 'react-native';
import { commonStyles, colors } from '../theme/theme';

const ButtonSimple = ({ title, onPress }) => {
    return (
        <Pressable style={commonStyles.bannerButton} onPress={onPress}>
            <Text style={{ color: colors.textDark }}>{title}</Text>
        </Pressable>
    );
};

export default ButtonSimple;