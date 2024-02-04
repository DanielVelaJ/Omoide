import React from 'react';
import { View, Text, Button } from 'react-native';
import { commonStyles } from '../theme/theme';
import ButtonSimple from './ButtonSimple';

const TopBanner = ({ buttonTitle, title, onPress }) => {
    return (
        <View style={commonStyles.bannerContainer}>
            <Text style={commonStyles.bannerText}>{title}</Text>
            <ButtonSimple style = {commonStyles.bannerButton}title={buttonTitle} onPress={onPress} />
        </View>
    );
};

export default TopBanner;