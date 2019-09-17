/* eslint-disable react/prop-types */
import React from 'react';

import SymptomScreen from '../SymptomScreen';

const CoughScreen = () => {
  const otherProps = {
    symptomDescription:
      'A productive or non-productive cough\nthat is less than 3 weeks',
    drugOne: 'Guaifenesin',
    drugTwo: 'Dextro-methorphan',
    drugThree: 'Diphenhydramine',
  };
  return <SymptomScreen {...otherProps} />;
};

export default CoughScreen;
