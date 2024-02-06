import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles } from '../theme/theme';

const Section = ({ title, children, titleColor, ...rest }) => {
    return (
        <View style={{...commonStyles.sectionContainer, ...rest}}>
            <Text style={[commonStyles.sectionTitle, { color: titleColor }]}>{title}</Text>
            {children}
        </View>
    );
};

export default Section;