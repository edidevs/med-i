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
    resultsText: 'We got you \nBuddy!',
    messageOne: 'Is it in your ?',
    messageTwo: '',
    itemTextOne: 'Body',
    itemMessageOne: 'Relieve Physical Pain',
    itemTextTwo: 'Mind',
    itemMessageTwo: 'Address Mental Health',
  };
  return <StatusScreen {...props} />;
};

export default SickScreen;
