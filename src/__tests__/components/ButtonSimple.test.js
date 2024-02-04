import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import ButtonSimple from '../../components/ButtonSimple';

describe('ButtonSimple', () => {
  it('renders the button with the correct title', () => {
    const { getByText } = render(<ButtonSimple title="Test Button" onPress={() => {}} />);
    expect(getByText('Test Button')).toBeTruthy();
  });

  it('calls the onPress function when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<ButtonSimple title="Test Button" onPress={onPressMock} />);
    fireEvent.press(getByText('Test Button'));
    expect(onPressMock).toHaveBeenCalled();
  });
});