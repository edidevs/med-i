import React from 'react';

import StatusScreen from '../StatusScreen';

import { NotWellColors } from '../../common/styledComponents';

import { backgroundNotWell as background } from '../../utils';

const NotWellScreen = () => {
  const props = {
    sick: false,
    notWell: true,
    background,
    colors: NotWellColors,
    resultsText: 'Relax, take it easy',
    messageOne: 'Let me help you here',
    messageTwo: 'Explore these programs',
    itemTextOne: 'Diabetes',
    itemTextTwo: 'Smoking Cessation',
    itemTextThree: 'Food safety',
    itemTextFour: 'Mental Health',
  };
  return <StatusScreen {...props} />;
};

export default NotWellScreen;
