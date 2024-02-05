import InputField from "./InputField";
import React from 'react';
import { TextInput, View, StyleSheet, Text } from 'react-native';
import { commonStyles, colors } from '../theme/theme';
import Section from "./Section";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ButtonSimple from "./ButtonSimple";

const PatientForm = () => {
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
                        fieldName="Name" 
                        inputWidth={8*20} 
                        style={{marginBottom:16}}
                    />
                    <InputField 
                        fieldName="Gender" 
                        inputWidth={8*15} 
                        style={{marginBottom:16}}
                    />
                    <InputField 
                        fieldName="Age" 
                        inputWidth={8*5} 
                        style={{marginBottom:16}}
                    />
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
                    />
                </Section>
                <View 
                    style={{ flexDirection:'row', 
                             alignItems:'center', 
                             justifyContent:'center'}}>
                    <ButtonSimple 
                        title = {"Discard"} 
                        textColor={colors.textLight} 
                        style={{marginRight:16,
                                backgroundColor:colors.pale,
                                borderColor:colors.textLight,
                                borderWidth:1}}/>
                    <ButtonSimple 
                        title = {"Save"} 
                        textColor={colors.textLight} 
                        style={{margin:16,
                                paddingHorizontal:32,
                                backgroundColor:colors.highlight,
                                borderColor:colors.textLight,
                                borderWidth:1}}/>

                </View>
            </View>
        </KeyboardAwareScrollView>
    );
};

export default PatientForm;

