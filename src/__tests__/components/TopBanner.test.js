import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import TopBanner from '../../components/TopBanner';

describe('TopBanner', () => {
  it('renders correctly and displays the correct title and button title', () => {
    const title = 'Test Title';
    const buttonTitle = 'Test Button';
    const { getByText } = render(<TopBanner title={title} buttonTitle={buttonTitle} />);

    expect(getByText(title)).toBeTruthy();
    expect(getByText(buttonTitle)).toBeTruthy();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPress = jest.fn();
    const { getByText } = render(<TopBanner buttonTitle="Press me" onPress={onPress} />);

    fireEvent.press(getByText('Press me'));

    expect(onPress).toHaveBeenCalled();
  });
});