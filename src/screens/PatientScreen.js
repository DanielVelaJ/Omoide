import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Section from '../components/Section';
import Header from '../components/Header';
import InputField from '../components/InputField';
const PatientScreen = () => (
    <SafeAreaView>
        <Header message="Who is this patient?" />
        <InputField fieldName="Name" inputWidth={8*35}/>
    </SafeAreaView>
);

export default PatientScreen;