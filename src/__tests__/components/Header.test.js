import React from 'react';
import { render } from '@testing-library/react-native';
import Header from '../../components/Header';

describe('Header', () => {
  it('renders correctly and displays the correct message', () => {
    const message = 'Test Message';
    const { getByText } = render(<Header message={message} />);

    expect(getByText(message)).toBeTruthy();
  });
});