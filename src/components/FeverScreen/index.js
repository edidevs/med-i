/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const FeverScreen = () => {
  const otherProps = {
    symptomOne: 'Body temperature ofr 38C or more',
    drugOne: 'Paracetamol',
  };
  return <SymptomScreen {...otherProps} />;
};

export default FeverScreen;
