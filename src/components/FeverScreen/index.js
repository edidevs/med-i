/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const FeverScreen = () => {
  const otherProps = {
    symptomDescription: 'High body temperature of above\n38° C / 100° F',
    drugOne: 'Acetaminophen',
    drugTwo: 'Aspirin',
    drugThree: 'Ibuprofen',
    drugFour: 'Paracetamol',
  };
  return <SymptomScreen {...otherProps} />;
};

export default FeverScreen;
