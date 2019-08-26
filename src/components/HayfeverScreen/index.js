/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import {
  UpperView,
  MiddleView,
  LowerView,
  DescriptionText,
  ItemView,
  ItemGridText,
  BulletPointView,
  BoldText,
} from '../PainScreen/styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import Mascot from '../../../assets/Icons/Mascot.svg';
import DrugView from '../PainScreen/DrugView';

const background = require('../../../assets/Images/BodyScreen.png');

const HayfeverScreen = () => (
  <ImageContainer source={background}>
    <StatusBar barStyle="light-content" />
    <SafeAreaView>
      <UpperView>
        <DescriptionText>
          Mild pain that is less than six months
        </DescriptionText>
        <FlatGrid
          spacing={4}
          itemDimension={150}
          items={['Headache', 'Body ache', 'Toothache']}
          renderItem={({ item }) => (
            <ItemView>
              <BulletPointView />
              <ItemGridText>{item}</ItemGridText>
            </ItemView>
          )}
        />
      </UpperView>
      <MiddleView>
        <Mascot width={55} height={55} />
        <BoldText>OTC tips</BoldText>
      </MiddleView>
      <LowerView>
        <DrugView name="Paracetamol" />
        <DrugView name="Ibuprofen" />
      </LowerView>
    </SafeAreaView>
  </ImageContainer>
);

export default HayfeverScreen;
