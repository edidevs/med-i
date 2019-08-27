/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const CoughScreen = () => {
  const otherProps = {
    symptomOne: 'Cough less than three weeks',
    drugOne: 'Guaifenesin',
    drugTwo: 'Dextro-methorphan',
    drugThree: 'Diphenhydramine',
  };
  return <SymptomScreen {...otherProps} />;
};

export default CoughScreen;
