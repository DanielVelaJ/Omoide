import InputField from "./InputField";
import React, {useState} from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { commonStyles, colors } from '../theme/theme';
import Section from "./Section";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonSimple from "./ButtonSimple";
import { useNavigation } from '@react-navigation/native';

const PatientForm = () => {
    const navigation = useNavigation()
    const [isEditing, setIsEditing] = useState(true);
    // Initialize a new state variable to hold the form values.
    const [formValues, setFormValues] = useState({
        name: '',
        gender: '',
        age: '',
        notes: ''
    });
    const [isValidAge, setIsValidAge] = useState(true);

    // Function to handle changes in the form values.
    const handleInputChange = (name, value) => {
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };
    const handleAgeChange = (value) => {
        // Check if the value is a number and between 0 and 160.
        if (!isNaN(value) && value >= 0 && value <= 160) {
            setIsValidAge(true);
            setFormValues(prevValues => ({
                ...prevValues,
                age: value
            }));
        } else {
            setIsValidAge(false);
            setFormValues(prevValues => ({
                ...prevValues,
                age: ''
            }))
        }
    };

    // Function to reset the form values.
    const resetForm = () => {
        setFormValues({
            name: '',
            gender: '',
            age: '',
            notes: ''
        });
    };

    return (
        <KeyboardAwareScrollView
            extraScrollHeight={20}
            keyboardShouldPersistTaps='handled'
            enableOnAndroid={true}
            style={{ flex: 1 }}
        >
            <View style={{...commonStyles.patientFormContainer}}>
                <Section 
                    title="Basic Info" 
                    titleColor={colors.textLight}
                >
                    <InputField 
                        fieldName="Name *" 
                        inputWidth={8*20} 
                        style={{marginBottom:16}}
                        isEditing={isEditing}
                        containerColor={isEditing ? colors.textLight : colors.lightBlue}
                        value={formValues.name} // Set the value prop.
                        onChangeText={value => handleInputChange('name', value)} // Set the onChangeText prop.
                    />
                    <InputField 
                        fieldName="Gender *" 
                        inputWidth={8*15} 
                        style={{marginBottom:16}}
                        isEditing={isEditing}
                        containerColor={isEditing ? colors.textLight : colors.lightBlue}
                        value={formValues.gender} // Set the value prop.
                        onChangeText={value => handleInputChange('gender', value)} // Set the onChangeText prop.
                    />
                    <InputField 
                        fieldName="Age *" 
                        inputWidth={8*5} 
                        style={{marginBottom:16}}
                        isEditing={isEditing}
                        containerColor={isEditing ? colors.textLight : colors.lightBlue}
                        value={formValues.age} // Set the value prop.
                        onChangeText={value => handleAgeChange(value)} // Set the onChangeText prop.
                    />
                    {!isValidAge && <Text style={{color: colors.error, marginBottom: 16}}>Invalid age</Text>}
                </Section>
                <Section 
                    title="History" 
                    titleColor={colors.textLight}
                >
                    <InputField 
                        fieldName="Notes" 
                        vertical={true} 
                        inputWidth={'100%'} 
                        inputHeight={200}
                        style={{marginBottom:16}}
                        isEditing={isEditing}
                        containerColor={isEditing ? colors.textLight : colors.lightBlue}
                        value={formValues.notes} // Set the value prop.
                        onChangeText={value => handleInputChange('notes', value)} // Set the onChangeText prop.
                    />
                </Section>
                {isEditing ? 
                    <View 
                        style={{ flexDirection:'row', 
                                 alignItems:'center', 
                                 justifyContent:'center'}}>
                        <ButtonSimple 
                            title = {"Back"} 
                            textColor={colors.textLight} 
                            style={{margin:16,
                                    paddingHorizontal:32,
                                    backgroundColor:colors.primary,
                                    borderColor:colors.textLight,
                                    borderWidth:1}}
                            onPress={() => navigation.navigate('Home')}
                        />
                        <ButtonSimple 
                            title = {"Clean"} 
                            textColor={colors.textLight} 
                            style={{marginRight:16,
                                    backgroundColor:colors.pale,
                                    borderColor:colors.textLight,
                                    borderWidth:1}}
                            onPress={() => {
                                resetForm(); // Reset the form values when the "Discard" button is pressed.
                            }}
                        />
                        <ButtonSimple 
                            title = {"Save"} 
                            textColor={colors.textLight} 
                            style={{margin:16,
                                    paddingHorizontal:32,
                                    backgroundColor:colors.highlight,
                                    borderColor:colors.textLight,
                                    borderWidth:1}}
                            onPress={() => setIsEditing(false)}
                            disabled={!formValues.name || !formValues.gender || !formValues.age || !isValidAge}
                        />

                    </View> 
                : 
                    <View 
                        style={{ flexDirection:'row', 
                                 alignItems:'center', 
                                 justifyContent:'center'}}>

                        <ButtonSimple 
                            title = {"Back"} 
                            textColor={colors.textLight} 
                            style={{margin:16,
                                    paddingHorizontal:32,
                                    backgroundColor:colors.primary,
                                    borderColor:colors.textLight,
                                    borderWidth:1}}
                            onPress={() => navigation.navigate('Home')}
                        />
                            
                        <ButtonSimple 
                            title = {"Edit"} 
                            textColor={colors.textLight} 
                            style={{margin:16,
                                    paddingHorizontal:32,
                                    backgroundColor:colors.highlight,
                                    borderColor:colors.textLight,
                                    borderWidth:1}}
                            onPress={() => setIsEditing(true)}
                        />
                    </View> 
                }
            </View>
        </KeyboardAwareScrollView>
    );
};

export default PatientForm;