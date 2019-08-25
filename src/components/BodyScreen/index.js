/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';
import {
  TitleView,
  TitleText,
  ItemText,
  Symptoms,
  ItemView,
} from './styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import Pain from '../../../assets/Icons/Pain.svg';
import Itchiness from '../../../assets/Icons/Itchiness.svg';
import Cough from '../../../assets/Icons/Cough.svg';
import Indigestion from '../../../assets/Icons/Indigestion.svg';
import Fever from '../../../assets/Icons/Fever.svg';

const background = require('../../../assets/Images/BodyScreen.png');

const components = [
  <Pain />,
  <Fever />,
  <Itchiness />,
  <Indigestion />,
  <Cough />,
  <Fever />,
];

const BodyScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <TitleView>
        <TitleText>Tell me how you feel?</TitleText>
      </TitleView>
      <FlatGrid
        spacing={0}
        itemDimension={150}
        items={components}
        renderItem={({ item, index }) => (
          <ItemView>
            {item}
            <ItemText>{Symptoms[index]}</ItemText>
          </ItemView>
        )}
      />
    </SafeAreaView>
  </ImageContainer>
);

export default BodyScreen;
