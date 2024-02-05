import React from 'react';
import { SafeAreaView,Text, FlatList, StyleSheet,View } from 'react-native';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Section from '../components/Section'; // Import the Section component
import PatientPreview from '../components/PatientPreview'; // Import the PatientPreview component
import { commonStyles } from '../theme/theme';

// Test Data
const testPatient = {
  name: "John Doe",
  gender: "Male",
  age: 30
};
const testData = [testPatient,testPatient,
  testPatient,testPatient,
  testPatient,testPatient,
  testPatient,testPatient,testPatient]



const HomeScreen = () => {
  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header message="Welcome to the App!"/>
      <TopBanner title={"Create a new patient profile"} 
      buttonTitle="CREATE PATIENT" />
        <Section title ="My patients">
          <FlatList
          data={testData}
          renderItem={({ item }) => <PatientPreview patient={item} />}
          keyExtractor={(item, index) => index.toString()}/>   
          
        </Section>
      </SafeAreaView>
  );

};

export default HomeScreen;


