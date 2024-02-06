import React from 'react';
import { Pressable, Text } from 'react-native';
import { commonStyles, colors } from '../theme/theme';

const ButtonSimple = ({ title, onPress, style, textColor, ...rest }) => {
    return (
        <Pressable style={[commonStyles.bannerButton, style]} onPress={onPress} {...rest}>
            <Text style={{ color: textColor || colors.textDark }}>{title}</Text>
        </Pressable>
    );
};

export default ButtonSimple;