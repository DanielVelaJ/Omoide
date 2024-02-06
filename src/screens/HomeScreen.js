import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Section from '../components/Section';
import PatientPreview from '../components/PatientPreview';
import { commonStyles } from '../theme/theme';
import { usePatients } from '../contexts/PatientsContext'; // Import the usePatients hook

const HomeScreen = () => {
  const navigation = useNavigation();
  const { patients } = usePatients(); // Use the usePatients hook to access the patients' state

  const handlePatientSelect = (patient) => {
    navigation.navigate('Patient', { patient });
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header message="Welcome to the App!"/>
      <TopBanner title={"Create a new patient profile"} 
      buttonTitle="CREATE PATIENT" />
        <Section title ="My patients">
          <FlatList
          data={patients} // Use the patients state from the context
          renderItem={({ item }) => (
            <PatientPreview 
              patient={item} 
              onPress={() => handlePatientSelect(item)}
            />
          )}
          keyExtractor={(item, index) => index.toString()}/>   
          
        </Section>
      </SafeAreaView>
  );
};

export default HomeScreen;