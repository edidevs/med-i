/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const ItchinessScreen = () => {
  const otherProps = {
    symptomOne: 'Insect bites',
    symptomTwo: 'Sting',
    symptomThree: 'Rashes',
    drugOne: 'Calamine lotion',
    drugTwo: 'Hydro-cortisone',
  };
  return <SymptomScreen {...otherProps} />;
};

export default ItchinessScreen;
