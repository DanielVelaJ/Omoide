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
            const newId = patients.length > 0 ? Math.max(...patients.map(patient => patient.id)) + 1 : 1;
    
            // Add the new ID to the new patient.
            newPatient.id = newId;
    
            console.log(`Creating patient with ID ${newId}:`, newPatient);
    
            setPatients(prevPatients => [...prevPatients, newPatient]);
        }
    };

    const updatePatient = (id, updatedPatient) => {
        // Validate the updated patient data
        if (isValidPatient(updatedPatient)) {
            // Convert the age property to a number
            updatedPatient.age = Number(updatedPatient.age);
    
            console.log(`Updating patient with ID ${id}:`, updatedPatient);

            setPatients(prevPatients => {
                const updatedPatients = prevPatients.map(patient => {
                    if (patient.id === Number(id)) {
                        return updatedPatient;
                    } else {
                        return patient;
                    }
                });
                return updatedPatients;
            });
        }
    };

    const deletePatient = (id) => {
        console.log(`Deleting patient with ID ${id}`);

        setPatients(prevPatients => {
            return prevPatients.filter(patient => patient.id !== Number(id));
        });
    };

    return (
        <PatientsContext.Provider value={{ patients, createPatient, updatePatient, deletePatient }}>
            {children}
        </PatientsContext.Provider>
    );
};

// Create a custom hook that shortcuts the process of calling useContext
export const usePatients = () => {
    return useContext(PatientsContext);
};