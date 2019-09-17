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
    messageOne: 'Say hello to wellness',
    messageTwo: 'A healthy you is a happy you',
    itemTextOne: 'Diabetes',
    itemTextTwo: 'Smoking Cessation',
    itemTextThree: 'Food safety',
    itemTextFour: 'Mental Health',
    itemMessageOne: 'bar',
    itemMessageTwo: 'bar',
    itemMessageThree: 'bar',
    itemMessageFour: 'bar',
  };
  return <StatusScreen {...props} />;
};

export default NotWellScreen;
