/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const IndigestionScreen = () => {
  const otherProps = {
    symptomDescription: 'Mild discomfort in upper abdomen',
    symptomOne: 'Heartburn',
    symptomTwo: 'Acid reflux',
    symptomThree: 'Feeling bloated',
    symptomFour: 'Belching',
    symptomFive: 'Farting',
    symptomSix: 'Nausea',
    drugOne: 'Aluminum Hydroxide',
    drugTwo: 'Magnesium Hydroxide',
    drugThree: 'Omeprazole',
    drugFour: 'Ranitidine',
    drugFive: 'Simethicone',
  };
  return <SymptomScreen {...otherProps} />;
};

export default IndigestionScreen;
