/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { FlatGrid } from 'react-native-super-grid';

import DrugView from './DrugView';
import {
  UpperView,
  MiddleView,
  LowerView,
  DescriptionText,
  ItemView,
  ItemGridText,
  BulletPointView,
  BoldText,
} from './styledComponents';
import { ImageContainer } from '../../common/styledComponents';

import Mascot from '../../../assets/Icons/Mascot.svg';

const background = require('../../../assets/Images/BodyScreen.png');

const SymptomScreen = ({
  symptomOne,
  symptomTwo,
  symptomThree,
  symptomFour,
  symptomFive,
  drugOne,
  drugTwo,
  drugThree,
  drugFour,
  drugFive,
}) => (
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
          items={[
            symptomOne,
            symptomTwo,
            symptomThree,
            symptomFour,
            symptomFive,
          ]}
          renderItem={({ item }) =>
            item ? (
              <ItemView>
                <BulletPointView />
                <ItemGridText>{item}</ItemGridText>
              </ItemView>
            ) : null
          }
        />
      </UpperView>
      <MiddleView>
        <Mascot width={55} height={55} />
        <BoldText>OTC tips</BoldText>
      </MiddleView>
      {/* TODO: turn this into flat list similar to above */}
      <LowerView>
        <DrugView name={drugOne} />
        <DrugView name={drugTwo} />
        <DrugView name={drugThree} />
        <DrugView name={drugFour} />
        <DrugView name={drugFive} />
      </LowerView>
    </SafeAreaView>
  </ImageContainer>
);

export default SymptomScreen;
