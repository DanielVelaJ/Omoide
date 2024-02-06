import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { commonStyles,colors } from '../theme/theme';

const InputField = ({ fieldName, inputWidth, inputHeight, style, vertical, isEditing, containerColor, ...rest }) => {
    return (
        <View 
            style={[
                commonStyles.inputFieldContainer, 
                style, 
                { 
                    flexDirection: vertical ? 'column' : 'row',
                    alignItems: vertical ? 'flex-start' : 'center',
                }
            ]}
        >
            <Text 
                style={[
                    commonStyles.regularText,
                    {
                        color: colors.textLight, 
                        marginRight: 8,
                        width: 8 * 11,
                        textAlign: vertical ? 'left' : 'right'
                    }
                ]}
            >
                {fieldName}
            </Text>
            <View style={[commonStyles.inputContainer, { backgroundColor: containerColor }]}>
                <TextInput 
                    multiline={true} 
                    style={[commonStyles.input, { width: inputWidth, height: inputHeight }]} 
                    editable={isEditing} // Use the isEditing prop to set the editable prop of the TextInput component.
                    {...rest} 
                />
            </View>
        </View>
    );
};

export default InputField;