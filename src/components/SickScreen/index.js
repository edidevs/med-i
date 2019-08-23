import React from 'react';

import StatusScreen from '../StatusScreen';

import { SickColors } from '../HomeScreen/styledComponents';

const background = require('../../../assets/Images/SickScreen.png');

const SickScreen = () => {
  const props = {
    sick: true,
    background,
    colors: SickColors,
    resultsText: 'We got you buddy',
    messageOne: '',
    messageTwo: 'Is it in your',
    itemTextOne: 'Mind',
    itemMessageOne: 'Addressing Mental Health',
    itemTextTwo: 'Body',
    itemMessageTwo: 'Cure Physical Pain',
  };
  return <StatusScreen {...props} />;
};

export default SickScreen;
