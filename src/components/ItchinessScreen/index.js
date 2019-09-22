/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const ItchinessScreen = () => {
  const otherProps = {
    symptomDescription: 'Irritation on the skin with urge to scratch',
    symptomOne: 'Rashes',
    symptomTwo: 'Sting',
    symptomThree: 'Insect bites',
    symptomFour: 'Irritation',
    drugOne: 'Calamine lotion',
    drugTwo: 'Hydrocortisone cream',
  };
  return <SymptomScreen {...otherProps} />;
};

export default ItchinessScreen;
