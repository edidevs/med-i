/* eslint-disable react/prop-types */
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import SymptomsView from './SymptomsView';

import DrugView from './DrugView';
import {
  UpperView,
  MiddleView,
  LowerView,
  BoldText,
  DescriptionText,
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
        <SymptomsView
          symptoms={[
            symptomOne,
            symptomTwo,
            symptomThree,
            symptomFour,
            symptomFive,
          ]}
        />
      </UpperView>
      <MiddleView>
        <Mascot width={55} height={55} />
        <BoldText>OTC tips</BoldText>
      </MiddleView>
      <LowerView
        data={[drugOne, drugTwo, drugThree, drugFour, drugFive]}
        renderItem={({ item }) => <DrugView name={item} />}
        keyExtractor={(item, index) => `key${index}`}
      />
    </SafeAreaView>
  </ImageContainer>
);

export default SymptomScreen;
