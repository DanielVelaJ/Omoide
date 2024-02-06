import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import PatientForm from '../components/PatientForm';
import { commonStyles } from '../theme/theme';

const PatientScreen = ({ route }) => {
    const patient = route.params ? route.params.patient : undefined;
    const editing = route.params ? route.params.editing : false;
    console.log('PatientScreen: patient:', patient);
    console.log('PatientScreen: editing:', editing);

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <Header message="Who is this patient?" />
            <PatientForm key={Date.now()} patient={patient} editing={editing} />
        </SafeAreaView>
    );
};

export default PatientScreen;

