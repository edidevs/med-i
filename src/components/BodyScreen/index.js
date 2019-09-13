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
import Hayfever from '../../../assets/Icons/Hayfever.svg';
import Itchiness from '../../../assets/Icons/Itchiness.svg';
import Cough from '../../../assets/Icons/Cough.svg';
import Indigestion from '../../../assets/Icons/Indigestion.svg';
import Fever from '../../../assets/Icons/Fever.svg';

import { handleRoute } from '../../utils/handleRoute';
import { screenWidth } from '../../utils/deviceSize';
import { backgroundSick as background } from '../../utils/loadAppropriateAsset';

const itemDimension = screenWidth < 700 ? 150 : 400;

const BodyScreen = props => {
  const components = [
    <Pain />,
    <Hayfever />,
    <Itchiness />,
    <Fever />,
    <Cough />,
    <Indigestion />,
  ];
  return (
    <ImageContainer source={background}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <TitleView>
          <TitleText>Tell me where the pain is</TitleText>
        </TitleView>
        <FlatGrid
          spacing={0}
          itemDimension={itemDimension}
          items={components}
          renderItem={({ item, index }) => (
            <ItemView onPress={() => handleRoute(props, Symptoms[index])}>
              {item}
              <ItemText>{Symptoms[index]}</ItemText>
            </ItemView>
          )}
        />
      </SafeAreaView>
    </ImageContainer>
  );
};

export default BodyScreen;
