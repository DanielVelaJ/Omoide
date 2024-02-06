import React from 'react';
import { Text, View } from 'react-native';
import { commonStyles, colors } from '../theme/theme';
import IconWithText from './IconWithText';
import ButtonSimple from './ButtonSimple';

const PatientView = ({ patient, onPress, onDelete }) => {
    let genderIcon;
    if (patient.gender === 'Male') {
        genderIcon = "male";
    } else if (patient.gender === 'Female') {
        genderIcon = "female";
    } else {
        genderIcon = "transgender";
    }

    return (
        <View style={commonStyles.patientPreviewContainer}>
            <Text style={commonStyles.patientPreviewName}>{patient.name}</Text>
            <View style={commonStyles.patientPreviewIconsButtonContainer}>    
                <View style={commonStyles.patientPreviewIconsContainer}>
                    <IconWithText iconName={genderIcon} text={patient.gender} color={colors.background} />
                    <IconWithText iconName={'elderly'} text={patient.age.toString()} color={colors.background} />
                </View>
                <ButtonSimple title="Delete" onPress={onDelete} />
                <ButtonSimple title="View Profile" onPress={onPress} />
            </View>
        </View>
    );
};

export default PatientView;
