import React from 'react';
import { Text } from 'react-native'; // Add this line
import { render } from '@testing-library/react-native';
import Section from '../../components/Section';

describe('Section', () => {
  it('renders the title and children correctly', () => {
    const { getByText } = render(
      <Section title="Test Section">
        <Text>Test Child</Text>
      </Section>
    );

    expect(getByText('Test Section')).toBeTruthy();
    expect(getByText('Test Child')).toBeTruthy();
  });
});