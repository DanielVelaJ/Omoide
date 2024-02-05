import React from 'react';
import { render } from '@testing-library/react-native';
import InputField from '../../components/InputField';

describe('InputField', () => {
  it('renders correctly', () => {
    const { getByText, getByPlaceholderText } = render(
      <InputField fieldName="Email" placeholder="Enter your email" />
    );

    expect(getByText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter your email')).toBeTruthy();
  });
});