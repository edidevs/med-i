import React from 'react';

import StatusScreen from '../StatusScreen';

import { SickColors } from '../../common/styledComponents';

import { backgroundSick as background } from '../../utils';

const SickScreen = () => {
  const props = {
    sick: true,
    notWell: false,
    background,
    colors: SickColors,
    resultsText: 'Stay clam, I got you',
    messageOne: 'Help me locate the source of pain',
    messageTwo: 'Is it in your ?',
    itemTextOne: 'Body',
    itemTextTwo: 'Mind',
    itemMessageOne: 'Relieve Physical Pain',
    itemMessageTwo: 'Address Mental Health',
  };
  return <StatusScreen {...props} />;
};

export default SickScreen;
