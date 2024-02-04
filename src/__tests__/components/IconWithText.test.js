import React from 'react';
import { render } from '@testing-library/react-native';
import IconWithText from '../../components/IconWithText';
describe('IconWithText', () => {
  it('renders the text correctly', () => {
    const { getByText } = render(<IconWithText iconName="home" text="Test Text" color="blue" />);
    expect(getByText('Test Text')).toBeTruthy();
  });
});