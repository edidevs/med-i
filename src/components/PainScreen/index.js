/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const PainScreen = () => {
  const otherProps = {
    symptomOne: 'Headache',
    symptomTwo: 'Body ache',
    symptomThree: 'Toothache',
    drugOne: 'Paracetamol',
    drugTwo: 'Ibuprofen',
  };
  return <SymptomScreen {...otherProps} />;
};

export default PainScreen;
