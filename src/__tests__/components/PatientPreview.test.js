import React from 'react';
import { render } from '@testing-library/react-native';
import PatientView from '../../components/PatientPreview';

describe('PatientView', () => {
  const testPatientMale = {
    name: "Test Name",
    gender: "Male",
    age: 30
  };

  const testPatientFemale = {
    name: "Test Name",
    gender: "Female",
    age: 30
  };

  const testPatientOther = {
    name: "Test Name",
    gender: "Other",
    age: 30
  };

  it('renders the male gender correctly', () => {
    const { getByText } = render(<PatientView patient={testPatientMale} />);
    expect(getByText('Male')).toBeTruthy();
  });

  it('renders the female gender correctly', () => {
    const { getByText } = render(<PatientView patient={testPatientFemale} />);
    expect(getByText('Female')).toBeTruthy();
  });

  it('renders the other gender correctly', () => {
    const { getByText } = render(<PatientView patient={testPatientOther} />);
    expect(getByText('Other')).toBeTruthy();
  });

  // ... other tests
});