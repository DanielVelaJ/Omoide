import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../theme/theme';

const Section = ({ title, children }) => {
    return (
        <View style={commonStyles.sectionContainer}>
            <Text style={commonStyles.sectionTitle}>{title}</Text>
            {children}
        </View>
    );
};

export default Section;