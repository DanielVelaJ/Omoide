import React from 'react';
import { SafeAreaView, FlatList, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import TopBanner from '../components/TopBanner';
import Section from '../components/Section';
import PatientPreview from '../components/PatientPreview';
import { commonStyles } from '../theme/theme';
import { usePatients } from '../contexts/PatientsContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { patients, deletePatient } = usePatients();

  const handlePatientSelect = (patient) => {
    navigation.navigate('Patient', { patient, editing: false});
  };

  const handleCreatePatient = () => {
    navigation.navigate('Patient',{editing: true}); 
  };

  const handleDeletePatient = (id) => { 
    Alert.alert(
      "Delete Patient",
      "Are you sure you want to delete this patient?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => {
          
          console.log('deletePatient: id:', id)
          deletePatient(id)} }
      ]
    );
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <Header message="Welcome to the App!"/>
      <TopBanner 
        title="Create a new patient profile" 
        buttonTitle="Create Patient"
        onPress={handleCreatePatient} 
      />
      <Section title="My patients" marginBottom={0}>
        <View style={{flex: 1, backgroundColor:'red'}}>
          <FlatList
            style={{backgroundColor: 'white'}}
            data={patients}
            renderItem={({ item }) => (
              <PatientPreview 
                patient={item} 
                onPress={() => handlePatientSelect(item)}
                onDelete={() => handleDeletePatient(item.id)}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </Section>
    </SafeAreaView>
  );
};

export default HomeScreen;