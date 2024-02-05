import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { commonStyles,colors } from '../theme/theme';

const InputField = ({ fieldName, inputWidth, ...rest }) => {
    return (
        <View style={commonStyles.inputFieldContainer}>
            <Text style={[commonStyles.regularText,
            {color:colors.textLight, marginRight:8}]}>{fieldName}</Text>
            <View style={[commonStyles.inputContainer, { width: inputWidth}]}>
                <TextInput style={commonStyles.input} {...rest} />
            </View>
        </View>
    );
};

export default InputField;