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
    resultsText: 'It is Okay',
    messageOne: 'Say hello to wellness',
    messageTwo: 'A healthy you is a happy you',
    itemTextOne: 'Med-i health',
    itemMessageOne: 'Get in shape',
    itemTextTwo: 'Med-i devices',
    itemMessageTwo: 'Explore health devices',
  };
  return <StatusScreen {...props} />;
};

export default NotWellScreen;
