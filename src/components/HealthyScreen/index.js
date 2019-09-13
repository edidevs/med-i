import React from 'react';

import StatusScreen from '../StatusScreen';
import { HealthyColors } from '../../common/styledComponents';
import { backgroundHealthy as background } from '../../utils/loadAppropriateAsset';

const HealthyScreen = () => {
  const props = {
    sick: false,
    notWell: false,
    background,
    colors: HealthyColors,
    resultsText: 'Medi I am well',
    messageOne: 'Say hello to wellness',
    messageTwo: 'A healthy you is a happy you',
    itemTextOne: 'Yoga',
    itemMessageOne: 'Start your practice here',
    itemTextTwo: 'Sport',
    itemMessageTwo: 'Enroll in classes here',
  };
  return <StatusScreen {...props} />;
};

export default HealthyScreen;
