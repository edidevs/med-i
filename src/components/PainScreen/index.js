/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const PainScreen = () => {
  const otherProps = {
    symptomDescription: 'Pain that is less than six months',
    symptomOne: 'Headache',
    symptomTwo: 'Body ache',
    symptomThree: 'Toothache',
    symptomFour: 'Stomach ache',
    drugOne: 'Codeine',
    drugTwo: 'Ibuprofen',
    drugThree: 'Paracetamol',
  };
  return <SymptomScreen {...otherProps} />;
};

export default PainScreen;
