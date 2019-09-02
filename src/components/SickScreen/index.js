import React from 'react';

import StatusScreen from '../StatusScreen';

import { SickColors } from '../../common/styledComponents';

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
    itemMessageOne: 'Address Mental Health',
    itemTextTwo: 'Body',
    itemMessageTwo: 'Relieve Physical Pain',
  };
  return <StatusScreen {...props} />;
};

export default SickScreen;
