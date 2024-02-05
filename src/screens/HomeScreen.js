import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Section from '../components/Section'; // Import the Section component
import PatientPreview from '../components/PatientPreview'; // Import the PatientPreview component
import IconWithText from '../components/IconWithText';
import { MaterialIcons } from '@expo/vector-icons'; // Import the Icon component
import { commonStyles } from '../theme/theme';

const testPatient = {
  name: "John Doe",
  gender: "Male",
  age: 30
};
const HomeScreen = () => {
  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header
        message="Welcome to the App!"
      />
      {/* Other components of your screen */}
      <TopBanner title={"Create a new patient profile"} 
      buttonTitle="CREATE PATIENT" />
      <Section 
      title ="Section Title">
        <PatientPreview patient={testPatient}/>

        
      </Section>

    </SafeAreaView>
  );
};

export default HomeScreen;
