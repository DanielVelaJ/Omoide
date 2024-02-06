import React, { createContext, useState, useContext } from 'react';

// Initial patients data
const initialPatients = [
    {
        id: 1,
        name: "John Doe",
        gender: "Male",
        age: 40
    },
    // other patients...
];

// Create the context
const PatientsContext = createContext();

// Placeholder isValidPatient function
const isValidPatient = (patient) => {
    // Placeholder validation logic
    // You should replace this with your actual validation logic
    // return patient && patient.name && patient.gender && patient.age;
    return true;
};

// Create the provider component
export const PatientsProvider = ({ children }) => {
    // Create a state for the patients.
    const [patients, setPatients] = useState(initialPatients);

    const createPatient = (newPatient) => {
        // Validate the new patient data
        if (isValidPatient(newPatient)) {
            // Generate a new ID.
            const newId = Math.max(...patients.map(patient => patient.id)) + 1;

            // Add the new ID to the new patient.
            newPatient.id = newId;

            setPatients(prevPatients => [...prevPatients, newPatient]);
        }
    };

    const updatePatient = (id, updatedPatient) => {
        console.log('Entering updatePatient function in context file');
        console.log(`Patient ID to update: ${id}`);
        console.log('New patient data:', updatedPatient);
    
        // Validate the updated patient data
        if (isValidPatient(updatedPatient)) {
            // Convert the age property to a number
            updatedPatient.age = Number(updatedPatient.age);
    
            setPatients(prevPatients => {
                const updatedPatients = prevPatients.map(patient => {
                    if (patient.id === Number(id)) {
                        console.log(`Updating patient with ID: ${id}`);
                        return updatedPatient;
                    } else {
                        return patient;
                    }
                });
    
                console.log('Updated patients list:', updatedPatients);
                return updatedPatients;
            });
    
            console.log('State update function setPatients has been called');
        } else {
            console.log('Invalid patient data, not updating');
        }
    };

    return (
        <PatientsContext.Provider value={{ patients, createPatient, updatePatient }}>
            {children}
        </PatientsContext.Provider>
    );
};

// Create a custom hook that shortcuts the process of calling useContext
export const usePatients = () => {
    return useContext(PatientsContext);
};