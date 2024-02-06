import React from 'react';
import { SafeAreaView } from 'react-native';
import Header from '../components/Header';
import PatientForm from '../components/PatientForm';

const PatientScreen = ({ route }) => {
    const { patient } = route.params;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header message="Who is this patient?" />
            <PatientForm patient={patient} />
        </SafeAreaView>
    );
};

export default PatientScreen;

