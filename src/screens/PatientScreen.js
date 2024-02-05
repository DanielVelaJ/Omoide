import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Section from '../components/Section';
import Header from '../components/Header';
import InputField from '../components/InputField';
import PatientForm from '../components/PatientForm';

const PatientScreen = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <Header message="Who is this patient?" />
        <PatientForm />
    </SafeAreaView>
);

export default PatientScreen;

