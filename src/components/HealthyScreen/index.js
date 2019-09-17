import React from 'react';

import StatusScreen from '../StatusScreen';
import { HealthyColors } from '../../common/styledComponents';

import { backgroundHealthy as background } from '../../utils';

const HealthyScreen = () => {
  const props = {
    sick: false,
    notWell: false,
    background,
    colors: HealthyColors,
    resultsText: 'Med-i I am well',
    messageOne: 'Say hello to wellness',
    messageTwo: 'A healthy you is a happy you',
    itemTextOne: 'Physical Activity',
    itemMessageOne: 'Stay active, stay healthy!',
    itemTextTwo: 'Nutrition',
    itemMessageTwo: 'Eat well with a healthy diet!',
  };
  return <StatusScreen {...props} />;
};

export default HealthyScreen;
