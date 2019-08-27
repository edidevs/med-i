/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const IndigestionScreen = () => {
  const otherProps = {
    symptomOne: 'Heartburn',
    symptomTwo: 'Acid reflux',
    symptomThree: 'Feeling bloated',
    symptomFour: 'Belching',
    symptomFive: 'Farting',
    drugOne: 'Aluminum Hydroxide',
    drugTwo: 'Magnesium Hydroxide',
    drugThree: 'Omeprazole',
    drugFour: 'Ranitidine',
    drugFive: 'Simethicone',
  };
  return <SymptomScreen {...otherProps} />;
};

export default IndigestionScreen;
